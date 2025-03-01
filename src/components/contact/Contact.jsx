import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <section className='contact-hero'>
        <div className='container'>
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or inquiries</p>
        </div>
      </section>

      <section className='contact-section'>
        <div className='container'>
          <div className='contact-grid'>
            <div className='contact-info'>
              <h2>Get In Touch</h2>
              <div className='info-item'>
                <i className='fa fa-map-marker-alt'></i>
                <div>
                  <h3>Our Location</h3>
                  <p>123 Business Street, New York, USA</p>
                </div>
              </div>
              <div className='info-item'>
                <i className='fa fa-phone'></i>
                <div>
                  <h3>Phone Number</h3>
                  <p>+1 234 567 8900</p>
                </div>
              </div>
              <div className='info-item'>
                <i className='fa fa-envelope'></i>
                <div>
                  <h3>Email Address</h3>
                  <p>info@yourcompany.com</p>
                </div>
              </div>
              <div className='info-item'>
                <i className='fa fa-clock'></i>
                <div>
                  <h3>Working Hours</h3>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className='contact-form'>
              <h2>Send Message</h2>
              <form>
                <div className='form-group'>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className='form-group'>
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className='form-group'>
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className='form-group'>
                  <textarea placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className='submit-btn'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='map-section'>
        <div className='container'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2str!4v1644346128834!5m2!1sen!2str"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </section>
    </>
  )
}

export default Contact