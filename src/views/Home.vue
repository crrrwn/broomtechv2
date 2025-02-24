<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="animate-text-gradient">Fast & Reliable Delivery Services</h1>
        <p>Experience lightning-fast and efficient delivery for all your needs with BroomTech's cutting-edge delivery network.</p>
        <div class="hero-buttons">
          <router-link to="/login" class="btn-primary">Get Started</router-link>
          <router-link to="/services" class="btn-secondary">Learn More</router-link>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/479787326_541419971661781_435821400997250947_n-IwdyNmN8Vix7rtmawSnzCTGFX47GnF.png" alt="Delivery illustration" />
      </div>
    </section>

    <section class="services">
      <h2>Our Services</h2>
      <p>We offer a wide range of innovative delivery solutions to meet your needs</p>
      <div class="service-cards">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon" :class="service.icon"></div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <router-link :to="service.link" class="learn-more">Learn more →</router-link>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <h2>How It Works</h2>
      <p>Three simple steps to get your package delivered</p>
      <div class="steps">
        <div v-for="(step, index) in steps" :key="index" class="step">
          <div class="step-number">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      services: [
        { title: 'Express Delivery', description: 'Same-day delivery for urgent packages', icon: 'icon-express', link: '/services#express' },
        { title: 'Cargo Services', description: 'Safe transport for large items', icon: 'icon-cargo', link: '/services#cargo' },
        { title: 'Real-time Tracking', description: 'Monitor your delivery status live', icon: 'icon-tracking', link: '/services#tracking' }
      ],
      steps: [
        { title: 'Book a Delivery', description: 'Choose your delivery type and schedule' },
        { title: 'Package Pickup', description: 'We collect your package from your location' },
        { title: 'Fast Delivery', description: 'Track your package until it reaches its destination' }
      ]
    }
  }
}
</script>

<style scoped>
/* Global Styles */
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #5CB338 0%, #ECE852 100%);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.828zM32 0l-9.9 9.9 1.414 1.414L33.828 0H32zM0 0c0 .528.214 1.057.586 1.414l2.829 2.829 1.414-1.414L3 1V0H0zm4.343 0l1.414 1.414L13.172 8.83l1.414-1.414L6.172 0h-1.83zM39.9 0L36 3.9l1.414 1.414L40.657 2.07 42.07.657l-1.414-1.414L39.9 0zm16.485 0L54.627 1.757 56.04.343 54.627 0h1.758zM32 52.9L42.071 42.83l1.414 1.414-9.9 9.9H32zm21.657-1.415l-1.414 1.414L45.9 60h2.828l4.93-4.93-1.414-1.414zm-48.084.343L7 50.357 8.414 51.77l7.9 7.9H13.486l-7.913-7.843zm36.827-.344L33.828 60h2.829l8.485-8.485-1.414-1.414zm-18.657.344l8.485 8.485H29.8l-8.485-8.485 1.414-1.414zm23.485-.343l-1.414 1.414L39.9 60h2.828l1.414-1.414-1.414-1.414zM20.344 60h2.83L26.9 56.273l-1.414-1.414L20.344 60zm-7.859-7.071l7.071-7.07 1.415 1.414L11.03 57.214 8.787 59.46l1.414 1.414 1.414-1.414.001-.001 7.07-7.07-1.414-1.414L10.2 58.042l2.285-2.285z' fill='rgba(255,255,255,0.1)' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
  animation: patternMove 20s linear infinite;
}

@keyframes patternMove {
  0% { background-position: 0 0; }
  100% { background-position: 60px 60px; }
}

.hero-content {
  flex: 1;
  z-index: 1;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.hero-image img:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.animate-text-gradient {
  background: linear-gradient(to right, #ffffff, #1d5f01);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: textGradient 5s linear infinite;
}

@keyframes textGradient {
  to {
    background-position: 200% center;
  }
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.btn-primary {
  background-color: #02531a;
  color: white;
  box-shadow: 0 4px 15px rgba(2, 83, 26, 0.3);
}

.btn-primary:hover {
  background-color: #003f25;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(2, 83, 26, 0.4);
}

.btn-secondary {
  border: 2px solid #02531a;
  color: #02531a;
  background-color: rgba(255, 255, 255, 0.9);
}

.btn-secondary:hover {
  background-color: #02531a;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(2, 83, 26, 0.4);
}

/* Services Section */
.services, .how-it-works {
  padding: 6rem 0;
  text-align: center;
}

h2 {
  font-size: 2.8rem;
  color: #02531a;
  margin-bottom: 1.5rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 4px;
  background: linear-gradient(to right, #5CB338, #ECE852);
  border-radius: 2px;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  padding: 2.5rem;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(92, 179, 56, 0.2);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #5CB338, #ECE852);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #5CB338;
}

.service-card h3 {
  font-size: 1.8rem;
  color: #02531a;
  margin: 1rem 0;
  font-weight: 700;
}

.learn-more {
  color: #5CB338;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background: rgba(92, 179, 56, 0.1);
}

.learn-more:hover {
  color: #02531a;
  background: rgba(2, 83, 26, 0.1);
  transform: translateX(5px);
}

/* How It Works Section */
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.step {
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(236, 232, 82, 0.1) 0%, rgba(255, 193, 69, 0.1) 100%);
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(92, 179, 56, 0.2);
  position: relative;
  overflow: hidden;
}

.step::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(92, 179, 56, 0.1) 0%, rgba(236, 232, 82, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.step:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.step:hover::after {
  opacity: 1;
}

.step-number {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #5CB338, #02531a);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-weight: bold;
  font-size: 1.8rem;
  box-shadow: 0 10px 20px rgba(92, 179, 56, 0.3);
  position: relative;
  z-index: 1;
}

.step h3 {
  color: #02531a;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.step p {
  color: #333;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 4rem 1.5rem;
  }

  .hero-content {
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
    flex-direction: column;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  .service-cards, .steps {
    grid-template-columns: 1fr;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero, .service-card, .step {
  animation: fadeInUp 0.8s ease-out;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .hero::before, .hero-image img, .btn-primary, .btn-secondary, .service-card, .step, .learn-more {
    transition: none;
  }

  .hero, .service-card, .step {
    animation: none;
  }

  .animate-text-gradient {
    animation: none;
    background: #ffffff;
    -webkit-text-fill-color: initial;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #5CB338;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #02531a;
}
</style>