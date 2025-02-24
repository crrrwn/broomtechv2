<template>
  <div class="min-h-screen bg-gradient-to-br from-[#f0f8f0] to-[#e6f3e6] pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-[1200px] mx-auto relative">
      <!-- Background Elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-[#00a651] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-0 right-0 w-64 h-64 bg-[#5cb85c] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-32 left-20 w-64 h-64 bg-[#8bc34a] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <!-- Left Column -->
        <div class="text-center lg:text-left z-10">
          <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00a651] to-[#ECE852]">BroomTech</span>
          </h1>
          <p class="text-[#666666] text-xl mb-10 max-w-lg mx-auto lg:mx-0">
            Join our platform to experience fast and reliable delivery services powered by cutting-edge technology.
          </p>
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 group">
            <img 
              :src="'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480029417_1340654447130069_6688936135765663218_n-b88BWlSzAh5H0FW1yJAsN5cF2QdLVJ.png'" 
              alt="Delivery Illustration"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
    
        <!-- Right Column -->
        <div class="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 transform transition-all duration-300 hover:shadow-3xl">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Sign up</h2>
          <p class="text-[#666666] text-lg mb-6 text-center">Create your account to continue</p>
    
          <!-- First Name -->
          <div class="mb-4">
            <input
              v-model="firstName"
              type="text"
              placeholder="First Name"
              class="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
            />
          </div>

          <!-- Last Name -->
          <div class="mb-4">
            <input
              v-model="lastName"
              type="text"
              placeholder="Last Name"
              class="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
            />
          </div>

          <!-- Middle Name -->
          <div class="mb-4">
            <input
              v-model="middleName"
              type="text"
              placeholder="Middle Name"
              class="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
            />
          </div>

          <!-- Address -->
          <div class="mb-4">
            <input
              v-model="address"
              type="text"
              placeholder="Address"
              class="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
            />
          </div>

          <!-- Phone Number -->
          <div class="flex gap-3 mb-4">
            <div class="relative">
              <select
                v-model="countryCode"
                class="w-[80px] appearance-none pl-3 pr-8 py-3 bg-white border-2 border-black-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
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
              class="flex-1 px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
            />
          </div>

          <!-- Email -->
          <div class="mb-4">
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
            />
          </div>

          <!-- Password -->
          <div class="mb-4">
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
            />
          </div>

          <!-- Confirm Password -->
          <div class="mb-6">
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              class="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent text-lg"
            />
          </div>

          <p v-if="error" class="text-red-500 text-sm mb-4 text-center">{{ error }}</p>
    
          <button
            @click="handleSignUp"
            :disabled="isLoading"
            class="w-full bg-[#00a651] text-white py-4 rounded-lg font-semibold mb-6 disabled:bg-gray-200 disabled:cursor-not-allowed hover:bg-[#008f45] transition-colors text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <span v-if="!isLoading">Sign Up</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing Up...
            </span>
          </button>
    
          <div class="relative mb-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-[#666666] text-lg">OR</span>
            </div>
          </div>
    
          <button
            @click="handleGoogleLogin"
            :disabled="isLoading"
            class="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <img src="../assets/google-icon.svg" alt="Google" class="w-6 h-6" />
            <span class="text-gray-700">Continue with Google</span>
          </button>
    
          <p class="mt-8 text-center text-sm text-[#666666]">
            By continuing, you agree to our
            <router-link to="/terms" class="text-[#00a651] hover:underline font-medium">Terms of Service</router-link>
            and
            <router-link to="/privacy" class="text-[#00a651] hover:underline font-medium">Privacy Policy</router-link>
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
import { createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier } from 'firebase/auth'

export default {
  name: 'SignUp',
  setup() {
    const router = useRouter()
    const firstName = ref('')
    const lastName = ref('')
    const middleName = ref('')
    const address = ref('')
    const countryCode = ref('+63')
    const phoneNumber = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const isLoading = ref(false)
    const error = ref('')
    const recaptchaVerifier = ref(null)

    const validateForm = () => {
      if (!firstName.value || !lastName.value || !email.value || !password.value || !confirmPassword.value) {
        error.value = 'Please fill in all required fields.'
        return false
      }
      if (password.value !== confirmPassword.value) {
        error.value = 'Passwords do not match.'
        return false
      }
      return true
    }

    const handleSignUp = async () => {
      if (!validateForm()) return

      try {
        isLoading.value = true
        error.value = ''

        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
        await sendEmailVerification(userCredential.user)
        
        router.push('/verify-email')
      } catch (err) {
        console.error('Error during sign up:', err)
        if (err.code === 'auth/email-already-in-use') {
          error.value = 'Email is already in use.'
        } else {
          error.value = 'Failed to sign up. Please try again.'
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
      firstName,
      lastName,
      middleName,
      address,
      countryCode,
      phoneNumber,
      email,
      password,
      confirmPassword,
      isLoading,
      error,
      handleSignUp,
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

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.grid > div {
  animation: fadeIn 0.5s ease-out forwards;
}

.grid > div:nth-child(2) {
  animation-delay: 0.2s;
}
</style>