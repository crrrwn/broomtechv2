<template>
    <div class="location-services">
      <div class="location-container">
        <h1>Enable Location Services</h1>
        <p>Allow access to your location to find nearby delivery partners and track your deliveries in real-time</p>
        <div class="map-placeholder">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480437330_652955320625419_8789209212023059133_n-F06NzYeMTHqKVxGgPKZYa3Rwq1y0uX.png" alt="Map" />
        </div>
        <button @click="enableLocation" class="enable-btn">
          Enable Location Services
        </button>
        <button @click="enterManually" class="manual-btn">
          Enter Location Manually
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'LocationServices',
    setup() {
      const router = useRouter()
  
      const enableLocation = async () => {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          })
          
          // Store location in Firestore
          const { latitude, longitude } = position.coords
          // Implement location storage logic
          
          router.push('/')
        } catch (error) {
          console.error('Error getting location:', error)
        }
      }
      
      const enterManually = () => {
        // Implement manual location entry
        router.push('/enter-location')
      }
  
      return {
        enableLocation,
        enterManually
      }
    }
  }
  </script>
  
  <style scoped>
  .location-services {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 60px);
    background-color: #f8f8f8;
  }
  
  .location-container {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
    text-align: center;
  }
  
  .map-placeholder {
    width: 100%;
    height: 300px;
    background-color: #f1f1f1;
    border-radius: 10px;
    margin: 2rem 0;
    overflow: hidden;
  }
  
  .map-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .enable-btn, .manual-btn {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 1rem;
  }
  
  .enable-btn {
    background-color: #00a651;
    color: white;
  }
  
  .manual-btn {
    background-color: transparent;
    color: #00a651;
    border: 1px solid #00a651;
  }
  </style>