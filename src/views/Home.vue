<template>
    <div class="home">
      <section class="hero">
        <div class="hero-content">
          <h1>Fast & Reliable Delivery Services</h1>
          <p>Experience quick and efficient delivery for all your needs with BroomTech's professional delivery network.</p>
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
        <p>We offer a wide range of delivery services to meet your needs</p>
        <div class="service-cards">
          <div class="service-card">
            <i class="icon-express"></i>
            <h3>Express Delivery</h3>
            <p>Same-day delivery for urgent packages</p>
            <router-link to="/services" class="learn-more">Learn more →</router-link>
          </div>
          <div class="service-card">
            <i class="icon-cargo"></i>
            <h3>Cargo Services</h3>
            <p>Safe transport for large items</p>
            <router-link to="/services" class="learn-more">Learn more →</router-link>
          </div>
          <div class="service-card">
            <i class="icon-tracking"></i>
            <h3>Real-time Tracking</h3>
            <p>Monitor your delivery status live</p>
            <router-link to="/services" class="learn-more">Learn more →</router-link>
          </div>
        </div>
      </section>
  
      <section class="how-it-works">
        <h2>How It Works</h2>
        <p>Simple steps to get your package delivered</p>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Book a Delivery</h3>
            <p>Choose your delivery type and schedule</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Package Pickup</h3>
            <p>We collect your package from your location</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Fast Delivery</h3>
            <p>Track your package until it reaches its destination</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .hero {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 4rem 0;
  }
  
  .hero-content {
    flex: 1;
  }
  
  .hero-image {
    flex: 1;
  }
  
  .hero-image img {
    max-width: 100%;
    height: auto;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .btn-primary, .btn-secondary {
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
  }
  
  .btn-primary {
    background-color: #00a651;
    color: white;
  }
  
  .btn-secondary {
    border: 2px solid #00a651;
    color: #00a651;
  }
  
  .services, .how-it-works {
    padding: 4rem 0;
    text-align: center;
  }
  
  .service-cards {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .service-card {
    flex: 1;
    padding: 2rem;
    background-color: #f8f8f8;
    border-radius: 10px;
  }
  
  .steps {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .step {
    flex: 1;
  }
  
  .step-number {
    width: 40px;
    height: 40px;
    background-color: #00a651;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
    }
  
    .service-cards, .steps {
      flex-direction: column;
    }
  }
  </style>