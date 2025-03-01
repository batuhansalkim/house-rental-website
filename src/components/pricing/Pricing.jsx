import React from 'react'
import './pricing.css'

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "199",
      period: "monthly",
      features: [
        "Property Listings: 5",
        "Featured Properties: 1",
        "24/7 Support",
        "Basic Analytics",
        "Email Support",
        "30 Days Listing"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "399",
      period: "monthly",
      features: [
        "Property Listings: 15",
        "Featured Properties: 5",
        "24/7 Priority Support",
        "Advanced Analytics",
        "Phone Support",
        "60 Days Listing",
        "Professional Photos"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "699",
      period: "monthly",
      features: [
        "Unlimited Listings",
        "Featured Properties: 15",
        "24/7 VIP Support",
        "Premium Analytics",
        "Dedicated Manager",
        "90 Days Listing",
        "Professional Photos",
        "Virtual Tours"
      ],
      recommended: false
    }
  ]

  return (
    <>
      <section className='pricing-hero'>
        <div className='container'>
          <h1>Choose Your Plan</h1>
          <p>Select the perfect plan for your real estate needs</p>
        </div>
      </section>

      <section className='pricing-section'>
        <div className='container'>
          <div className='pricing-grid'>
            {pricingPlans.map((plan, index) => (
              <div className={`pricing-card ${plan.recommended ? 'recommended' : ''}`} key={index}>
                {plan.recommended && <div className='recommended-badge'>Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className='price'>
                  <span className='currency'>$</span>
                  <span className='amount'>{plan.price}</span>
                  <span className='period'>/{plan.period}</span>
                </div>
                <ul className='features'>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className={`btn ${plan.recommended ? 'btn-recommended' : ''}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='pricing-faq'>
        <div className='container'>
          <h2>Frequently Asked Questions</h2>
          <div className='faq-grid'>
            <div className='faq-item'>
              <h3>How does billing work?</h3>
              <p>All plans are billed monthly or annually. You can upgrade, downgrade, or cancel your plan at any time.</p>
            </div>
            <div className='faq-item'>
              <h3>Can I change plans later?</h3>
              <p>Yes, you can change your plan at any time. The new rate will be prorated based on your billing cycle.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing