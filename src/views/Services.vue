<template>
    <div class="services-page">
      <section class="services-hero">
        <h1>Our Services</h1>
        <p>We offer a wide range of delivery services to meet your needs</p>
      </section>
      <section class="service-list">
        <div class="service-item">
          <div class="service-icon">
            <i class="icon-express"></i>
          </div>
          <div class="service-content">
            <h2>Express Delivery</h2>
            <p>Same-day delivery for urgent packages</p>
            <ul>
              <li>Fast and reliable delivery</li>
              <li>Real-time tracking</li>
              <li>Secure handling</li>
            </ul>
            <button class="book-btn">Book Now</button>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <i class="icon-cargo"></i>
          </div>
          <div class="service-content">
            <h2>Cargo Services</h2>
            <p>Safe transport for large items</p>
            <ul>
              <li>Large item transportation</li>
              <li>Careful handling</li>
              <li>Insurance coverage</li>
            </ul>
            <button class="book-btn">Book Now</button>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <i class="icon-tracking"></i>
          </div>
          <div class="service-content">
            <h2>Real-time Tracking</h2>
            <p>Monitor your delivery status live</p>
            <ul>
              <li>Live location updates</li>
              <li>Delivery notifications</li>
              <li>Delivery history</li>
            </ul>
            <button class="book-btn">Track Package</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services'
  }
  </script>
  
  <style scoped>
  .services-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .services-hero {
    text-align: center;
    padding: 4rem 0;
  }
  
  .services-hero h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .service-list {
    display: grid;
    gap: 2rem;
  }
  
  .service-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    padding: 2rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .service-icon {
    width: 80px;
    height: 80px;
    background-color: #00a651;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
  }
  
  .service-content h2 {
    margin-bottom: 0.5rem;
  }
  
  .service-content ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }
  
  .service-content li {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
  }
  
  .service-content li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #00a651;
  }
  
  .book-btn {
    background-color: #00a651;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    .service-item {
      grid-template-columns: 1fr;
      text-align: center;
    }
  
    .service-icon {
      margin: 0 auto;
    }
  }
  </style>