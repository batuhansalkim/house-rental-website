import React from 'react'
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          <div className='left'>
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3" alt='About Us' />
          </div>
          <div className='right'>
            <h2>About Our Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='stats'>
              <div className='stat-box'>
                <h3>15k+</h3>
                <p>Happy Customers</p>
              </div>
              <div className='stat-box'>
                <h3>2k+</h3>
                <p>Premium Properties</p>
              </div>
              <div className='stat-box'>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='team'>
        <div className='container'>
          <h2>Meet Our Team</h2>
          <div className='team-grid'>
            <div className='team-member'>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3" alt='Team Member' />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className='team-member'>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3" alt='Team Member' />
              <h3>Jane Smith</h3>
              <p>Property Manager</p>
            </div>
            <div className='team-member'>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt='Team Member' />
              <h3>Mike Johnson</h3>
              <p>Sales Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About