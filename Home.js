import React from 'react'
const Home = () => {
  return (
    <>
    
    <header>
	
   
    </header> 
    <main>
      <section class="home">
        <div class="home-overlay">
          <h1 class="home-text">Welcome to Har ghar vaccination</h1>
          <p class="home-text">Providing convenient and accessible vaccination services for everyone.</p>
          <a href="schedule.html" class="cta-button">Schedule Appointment</a>
        </div>
      </section>
      
    
      <section class="benefits">
        <h2>Transforming Healthcare with Convenient Access, Personalized Safety, and Timely Protection</h2>
        <div className="cards">
        <div class="benefit-card">
            <img src="/images/conveninece.png" alt="Convenience"/>
            <h3>Convenience</h3>
            <p>Easily schedule and manage your vaccination appointments from the comfort of your own home.</p>
          </div>
          <div class="benefit-card">
            <img src="/images/accessibility.png" alt="Accessibility"/>
            <h3>Accessibility</h3>
            <p>Access vaccinations from multiple centers or opt for our home vaccination services, ensuring accessibility for all.</p>
          </div>
          <div class="benefit-card">
            <img src="/images/safety.png" alt="Safety"/>
            <h3>Safety</h3>
            <p>Strict protocols in place to ensure safe vaccine administration and protect your personal information.</p>
          </div>
          <div class="benefit-card">
            <img src="/images/plans.png" alt="Plans"/>
            <h3>Personalized Vaccination Plans</h3>
            <p>Create tailored vaccination plans based on your age, medical history, and specific requirements.</p>
          </div>
          <div class="benefit-card">
            <img src="/images/timelynotification.png" alt="Timely Notifications"/>
            <h3>Timely Notifications</h3>
            <p>Stay informed about upcoming vaccinations and receive timely reminders to never miss an important dose.</p>
          </div>
          <div class="benefit-card">
            <img src="/images/plans.png" alt="Plans"/>
            <h3>Personalized Vaccination Plans</h3>
            <p>Create tailored vaccination plans based on your age, medical history, and specific requirements.</p>
          </div>
        </div>
          
        </section>
      <hr/>
      
      
        <section class="key-features">
          <h2>Empowering Health for Every Home with a Plethora of Key Features</h2>
          <div class="feature">
            <div class="feature-desc">
              <h3>Online Appointment Scheduling</h3>
              <p>Users can easily schedule their vaccination appointments online, eliminating the need for long waiting times and manual booking processes.</p>
              <a href="schedule.html" class="feature-btn">Schedule Now</a>
            </div>
            <img src="/images/feature1.png" alt="Feature 1" class="feature-img"/>
          </div>
          <div class="feature">
            <div class="feature-desc">
              <h3>Access to Vaccination Centers</h3>
              <p>The system provides information about nearby vaccination centers, including their availability, vaccine types, and other relevant details. Users can choose a convenient center based on their preferences.</p>
              <a href="vaccine.html" class="feature-btn">Check Now</a>
            </div>
            <img src="/images/vaccination centers.png" alt="Feature 2" class="feature-img"/>
          </div>
          <div class="feature">
            <div class="feature-desc">
              <h3>Home Vaccination Services</h3>
              <p>For individuals who are unable to visit vaccination centers, the system offers home vaccination services. Trained healthcare professionals can administer vaccines in the comfort and safety of the user's home.</p>
              <a href="vaccine.html" class="feature-btn">Learn More</a>
            </div>
            <img src="/images/feature3.png" alt="Feature 3" class="feature-img"/>
          </div>
        </section>
        <hr/>
        
        <section class="testimonials">
          <h2>Our happy clients say about us...</h2>
          <div class="testimonial">
            <div class="overlay"></div>
            <div class="testimonial-rating">
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
            </div>
            <p class="testimonial-content">"I had a great experience with Har ghar vaccination. The process was seamless, and the staff was friendly and professional."</p>
            <div class="testimonial-customer">
              <img src="/images/testimonial-1.jpg" alt="Customer 1" class="testimonial-img"/>
              <p class="testimonial-name">John Doe</p>
            </div>
          </div>
          <div class="testimonial">
            <div class="overlay"></div>
            <div class="testimonial-rating">
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/rating.png" alt="Half Rating Stars"/>
            </div>
            <p class="testimonial-content">"I highly recommend Har ghar vaccination. They made it easy for me to get vaccinated, and their home vaccination service was convenient."</p>
            <div class="testimonial-customer">
              <img src="/images/testimonial-2.jpg" alt="Customer 2" class="testimonial-img"/>
              <p class="testimonial-name">Jave Smith</p>
            </div>
          </div>
          <div class="testimonial">
            <div class="overlay"></div>
            <div class="testimonial-rating">
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/star.png" alt="Rating Stars"/>
              <img src="/images/rating.png" alt="half Rating Stars"/>
            </div>
            <p class="testimonial-content">"I'm impressed with the efficiency of Har ghar vaccination. The online appointment system and timely reminders helped me stay on track with my vaccinations."</p>
            <div class="testimonial-customer">
              <img src="/images/testimonial-3.jpg" alt="Customer 3" class="testimonial-img"/>
              <p class="testimonial-name">David Johnson</p>
            </div>
          </div>
          </section>
    
   </main>
     <footer class="footer">
      <div class="footer-contact">
        <p>Contact us: email@example.com | Phone: 123-456-7890</p>
      </div>
      <div class="footer-social">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
      </div>
      <div class="footer-text">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
    
    </>
  )
}

export default Home
