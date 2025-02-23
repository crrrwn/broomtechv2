<template>
    <div class="min-h-screen bg-[#f5f9f5] pt-16">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Left Column -->
          <div>
            <h1 class="text-[32px] font-bold text-gray-900 mb-2">
              Welcome to BroomTech
            </h1>
            <p class="text-[#666666] text-lg mb-6">
              Join our platform to experience fast and reliable delivery services
            </p>
            <div class="bg-[#f5f9f5] rounded-lg overflow-hidden">
              <img 
                :src="'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480029417_1340654447130069_6688936135765663218_n-b88BWlSzAh5H0FW1yJAsN5cF2QdLVJ.png'" 
                alt="Delivery Illustration"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
    
          <!-- Right Column -->
          <div class="bg-white rounded-xl p-8">
            <h2 class="text-[24px] font-bold text-gray-900 mb-2">Sign in or sign up</h2>
            <p class="text-[#666666] mb-6">Enter your phone number to continue</p>
    
            <div class="flex gap-2 mb-4">
              <div class="relative">
                <select
                  v-model="countryCode"
                  class="w-[76px] appearance-none pl-3 pr-8 py-2.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00a651] focus:border-[#00a651]"
                >
                  <option value="+63">+63</option>
                </select>
                <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <input
                type="tel"
                v-model="phoneNumber"
                placeholder="Enter phone number"
                @input="validatePhone"
                class="flex-1 px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00a651] focus:border-[#00a651]"
              />
            </div>
    
            <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>
    
            <button
              @click="handleLogin"
              :disabled="!isValidPhone || isLoading"
              class="w-full bg-[#00a651] text-white py-3 rounded-md font-medium mb-6 disabled:bg-gray-200 disabled:cursor-not-allowed hover:bg-[#008f45] transition-colors"
            >
              {{ isLoading ? 'Sending...' : 'Continue' }}
            </button>
    
            <div class="relative mb-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-white text-[#666666]">OR</span>
              </div>
            </div>
    
            <button
              @click="handleGoogleLogin"
              :disabled="isLoading"
              class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              <img src="../assets/google-icon.svg" alt="Google" class="w-5 h-5" />
              <span class="text-gray-700 font-medium">Continue with Google</span>
            </button>
    
            <p class="mt-6 text-center text-sm text-[#666666]">
              By continuing, you agree to our
              <router-link to="/terms" class="text-[#00a651] hover:underline">Terms of Service</router-link>
              and
              <router-link to="/privacy" class="text-[#00a651] hover:underline">Privacy Policy</router-link>
            </p>
          </div>
        </div>
      </div>
      <!-- Hidden recaptcha container -->
      <div id="recaptcha-container" class="hidden"></div>
    </div>
    </template>
    
    <script>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { auth } from '../config/firebase'
    import { signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier } from 'firebase/auth'
    
    export default {
      name: 'Login',
      setup() {
        const router = useRouter()
        const countryCode = ref('+63')
        const phoneNumber = ref('')
        const isValidPhone = ref(false)
        const isLoading = ref(false)
        const error = ref('')
        const recaptchaVerifier = ref(null)
    
        const validatePhone = () => {
          const phoneRegex = /^[0-9]{10}$/
          isValidPhone.value = phoneRegex.test(phoneNumber.value)
          if (error.value) error.value = ''
        }
    
        const setupRecaptcha = () => {
          try {
            if (recaptchaVerifier.value) {
              recaptchaVerifier.value.clear()
            }
            recaptchaVerifier.value = new RecaptchaVerifier(auth, 'recaptcha-container', {
              size: 'invisible',
              callback: (response) => {
                console.log('reCAPTCHA verified', response)
              },
              'expired-callback': () => {
                error.value = 'reCAPTCHA expired. Please try again.'
                recaptchaVerifier.value = null
              }
            })
            return recaptchaVerifier.value
          } catch (err) {
            console.error('Error setting up reCAPTCHA:', err)
            error.value = 'Error setting up verification. Please refresh the page.'
            return null
          }
        }
    
        const handleLogin = async () => {
          try {
            isLoading.value = true
            error.value = ''
    
            const verifier = setupRecaptcha()
            if (!verifier) {
              throw new Error('Failed to setup reCAPTCHA')
            }
    
            const formattedNumber = `${countryCode.value}${phoneNumber.value}`
            console.log('Sending code to:', formattedNumber)
    
            const confirmationResult = await signInWithPhoneNumber(auth, formattedNumber, verifier)
            
            localStorage.setItem('verificationId', confirmationResult.verificationId)
            localStorage.setItem('phoneNumber', formattedNumber)
    
            router.push('/verify')
          } catch (err) {
            console.error('Error during phone auth:', err)
            if (err.code === 'auth/invalid-phone-number') {
              error.value = 'Invalid phone number. Please check and try again.'
            } else if (err.code === 'auth/too-many-requests') {
              error.value = 'Too many attempts. Please try again later.'
            } else if (err.code === 'auth/captcha-check-failed') {
              error.value = 'reCAPTCHA verification failed. Please try again.'
            } else {
              error.value = 'Failed to send verification code. Please try again.'
            }
            
            if (recaptchaVerifier.value) {
              recaptchaVerifier.value.clear()
              recaptchaVerifier.value = null
            }
          } finally {
            isLoading.value = false
          }
        }
    
        const handleGoogleLogin = async () => {
          try {
            isLoading.value = true
            error.value = ''
            const provider = new GoogleAuthProvider()
            await signInWithPopup(auth, provider)
            router.push('/location')
          } catch (err) {
            console.error('Error with Google login:', err)
            error.value = 'Failed to sign in with Google. Please try again.'
          } finally {
            isLoading.value = false
          }
        }
    
        return {
          countryCode,
          phoneNumber,
          isValidPhone,
          isLoading,
          error,
          validatePhone,
          handleLogin,
          handleGoogleLogin
        }
      }
    }
    </script>
    
    <style scoped>
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: none;
    }
    
    input[type="tel"]::-webkit-outer-spin-button,
    input[type="tel"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    input[type="tel"] {
      -moz-appearance: textfield;
    }
    </style>