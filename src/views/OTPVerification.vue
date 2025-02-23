<template>
    <div class="min-h-screen bg-[#f5f9f5] pt-20">
      <div class="max-w-[400px] mx-auto px-4">
        <div class="bg-white rounded-xl shadow-sm p-8">
          <div class="flex items-center gap-4 mb-6">
            <button @click="$router.back()" class="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 class="text-2xl font-bold text-gray-900">OTP Verification</h1>
          </div>
    
          <p class="text-[#666666] mb-2">We have sent a verification code to</p>
          <p class="text-gray-900 font-medium mb-6">{{ phoneNumber }}</p>
    
          <div class="flex gap-4 mb-6">
            <input
              v-for="(digit, index) in otpDigits"
              :key="index"
              type="text"
              maxlength="1"
              v-model="otpDigits[index]"
              @input="handleInput($event, index)"
              @keydown="handleKeydown($event, index)"
              class="w-12 h-12 text-center text-xl font-medium border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent"
              ref="otpInputs"
            />
          </div>
    
          <p v-if="error" class="text-red-500 mb-4">{{ error }}</p>
    
          <button
            @click="verifyOTP"
            :disabled="!isValidOTP || isLoading"
            class="w-full bg-[#00a651] text-white py-3 rounded-md font-medium mb-6 disabled:bg-gray-200 disabled:cursor-not-allowed hover:bg-[#008f45] transition-colors"
          >
            {{ isLoading ? 'Verifying...' : 'Verify' }}
          </button>
    
          <button
            @click="resendOTP"
            :disabled="resendTimer > 0 || isLoading"
            class="w-full text-[#00a651] font-medium hover:underline"
          >
            {{ resendTimer > 0 ? `Resend Code (${resendTimer}s)` : 'Resend Code' }}
          </button>
        </div>
      </div>
      <!-- Hidden recaptcha container for resend -->
      <div id="recaptcha-container" class="hidden"></div>
    </div>
    </template>
    
    <script>
    import { ref, computed, onMounted, onUnmounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { auth } from '../config/firebase'
    import { PhoneAuthProvider, signInWithCredential, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth'
    
    export default {
      name: 'OTPVerification',
      setup() {
        const router = useRouter()
        const otpDigits = ref(['', '', '', '', '', ''])
        const resendTimer = ref(30)
        const phoneNumber = ref(localStorage.getItem('phoneNumber'))
        const verificationId = ref(localStorage.getItem('verificationId'))
        const otpInputs = ref([])
        const isLoading = ref(false)
        const error = ref('')
        let timerInterval
    
        const isValidOTP = computed(() => {
          return otpDigits.value.every(digit => digit.length === 1)
        })
    
        const handleInput = (event, index) => {
          const value = event.target.value
          // Only allow numbers
          if (!/^\d*$/.test(value)) {
            otpDigits.value[index] = ''
            return
          }
          if (value && index < 5) {
            otpInputs.value[index + 1].focus()
          }
        }
    
        const handleKeydown = (event, index) => {
          if (event.key === 'Backspace' && !otpDigits.value[index] && index > 0) {
            otpInputs.value[index - 1].focus()
          }
        }
    
        const startResendTimer = () => {
          resendTimer.value = 30
          timerInterval = setInterval(() => {
            if (resendTimer.value > 0) {
              resendTimer.value--
            } else {
              clearInterval(timerInterval)
            }
          }, 1000)
        }
    
        const setupRecaptcha = () => {
          try {
            if (window.recaptchaVerifier) {
              window.recaptchaVerifier.clear()
            }
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
              size: 'invisible',
              callback: () => {
                console.log('reCAPTCHA verified')
              },
            })
            return window.recaptchaVerifier
          } catch (err) {
            console.error('Error setting up reCAPTCHA:', err)
            return null
          }
        }
    
        const verifyOTP = async () => {
          try {
            isLoading.value = true
            error.value = ''
            
            if (!verificationId.value) {
              throw new Error('Verification ID not found')
            }
    
            const otp = otpDigits.value.join('')
            const credential = PhoneAuthProvider.credential(verificationId.value, otp)
            await signInWithCredential(auth, credential)
            router.push('/location')
          } catch (err) {
            console.error('Error verifying OTP:', err)
            error.value = 'Invalid verification code. Please try again.'
          } finally {
            isLoading.value = false
          }
        }
    
        const resendOTP = async () => {
          try {
            isLoading.value = true
            error.value = ''
            
            const verifier = setupRecaptcha()
            if (!verifier) {
              throw new Error('Failed to setup verification')
            }
    
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber.value, verifier)
            verificationId.value = confirmationResult.verificationId
            localStorage.setItem('verificationId', confirmationResult.verificationId)
            
            startResendTimer()
          } catch (err) {
            console.error('Error resending OTP:', err)
            error.value = 'Failed to resend verification code. Please try again.'
          } finally {
            isLoading.value = false
          }
        }
    
        onMounted(() => {
          if (!phoneNumber.value || !verificationId.value) {
            router.push('/login')
            return
          }
          startResendTimer()
        })
    
        onUnmounted(() => {
          clearInterval(timerInterval)
        })
    
        return {
          otpDigits,
          resendTimer,
          phoneNumber,
          isValidOTP,
          isLoading,
          error,
          handleInput,
          handleKeydown,
          verifyOTP,
          resendOTP,
          otpInputs
        }
      }
    }
    </script>