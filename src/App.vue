<template>
  <div class="min-h-screen bg-[#f5f9f5]">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 bg-white z-50">
      <div class="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#00a651]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
            <path d="M15 9h-2V7a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"/>
          </svg>
          <span class="text-[#00a651] text-xl font-semibold">BroomTech</span>
        </router-link>
        <router-link
          to="/get-started"
          class="bg-[#00a651] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#008f45] transition-colors"
        >
          Get Started
        </router-link>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-16">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white mt-20">
      <div class="max-w-[1200px] mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#00a651]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                <path d="M15 9h-2V7a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"/>
              </svg>
              <span class="text-[#00a651] text-xl font-semibold">BroomTech</span>
            </div>
            <p class="text-[#666666]">
              Your trusted delivery partner for quick and reliable services.
            </p>
          </div>
          
          <div>
            <h3 class="text-gray-900 font-semibold mb-4">Company</h3>
            <div class="space-y-2">
              <router-link to="/about" class="block text-[#666666] hover:text-[#00a651] transition-colors">About</router-link>
              <router-link to="/careers" class="block text-[#666666] hover:text-[#00a651] transition-colors">Careers</router-link>
              <router-link to="/press" class="block text-[#666666] hover:text-[#00a651] transition-colors">Press</router-link>
            </div>
          </div>

          <div>
            <h3 class="text-gray-900 font-semibold mb-4">Services</h3>
            <div class="space-y-2">
              <router-link to="/express" class="block text-[#666666] hover:text-[#00a651] transition-colors">Express Delivery</router-link>
              <router-link to="/cargo" class="block text-[#666666] hover:text-[#00a651] transition-colors">Cargo</router-link>
              <router-link to="/tracking" class="block text-[#666666] hover:text-[#00a651] transition-colors">Tracking</router-link>
            </div>
          </div>

          <div>
            <h3 class="text-gray-900 font-semibold mb-4">Support</h3>
            <div class="space-y-2">
              <router-link to="/help" class="block text-[#666666] hover:text-[#00a651] transition-colors">Help Center</router-link>
              <router-link to="/contact" class="block text-[#666666] hover:text-[#00a651] transition-colors">Contact Us</router-link>
              <router-link to="/privacy" class="block text-[#666666] hover:text-[#00a651] transition-colors">Privacy Policy</router-link>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-100 text-center">
          <p class="text-[#666666]">&copy; {{ new Date().getFullYear() }} BroomTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
        } else {
          localStorage.removeItem('user')
          if (router.currentRoute.value.meta.requiresAuth) {
            router.push('/login')
          }
        }
      })
    })
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  --primary: #00a651;
  --primary-dark: #008f45;
  --background: #f5f9f5;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background);
}

.btn-primary {
  @apply bg-[#00a651] text-white px-6 py-3 rounded-md font-medium 
    hover:bg-[#008f45] transition-colors;
}

.btn-secondary {
  @apply text-[#666666] px-6 py-3 rounded-md font-medium 
    hover:text-[#00a651] transition-colors;
}
</style>