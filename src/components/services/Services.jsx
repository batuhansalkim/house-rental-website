import React from 'react'
import './services.css'

const Services = () => {
  const services = [
    {
      icon: "https://img.icons8.com/color/96/000000/home-search.png",
      title: "Property Search",
      description: "Find your perfect home with our advanced property search tools and filters."
    },
    {
      icon: "https://img.icons8.com/color/96/000000/contract-job.png",
      title: "Rental Management",
      description: "Complete rental management services including tenant screening and maintenance."
    },
    {
      icon: "https://img.icons8.com/color/96/000000/handshake.png",
      title: "Property Consulting",
      description: "Expert advice on property investment and market analysis."
    },
    {
      icon: "https://img.icons8.com/color/96/000000/key-security.png",
      title: "Moving Services",
      description: "Hassle-free moving assistance and support for tenants."
    },
    {
      icon: "https://img.icons8.com/color/96/000000/document-signed.png",
      title: "Legal Support",
      description: "Professional legal assistance for all rental agreements and documentation."
    },
    {
      icon: "https://img.icons8.com/color/96/000000/maintenance.png",
      title: "Maintenance Support",
      description: "24/7 maintenance and repair services for all properties."
    }
  ]

  return (
    <>
      <section className='services-hero'>
        <div className='container'>
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of property services</p>
        </div>
      </section>

      <section className='services-grid'>
        <div className='container'>
          <div className='services-wrapper'>
            {services.map((service, index) => (
              <div className='service-box' key={index}>
                <img src={service.icon} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='service-cta'>
        <div className='container'>
          <h2>Need Custom Services?</h2>
          <p>Contact us to discuss your specific requirements</p>
          <button className='btn'>Contact Now</button>
        </div>
      </section>
    </>
  )
}

export default Services