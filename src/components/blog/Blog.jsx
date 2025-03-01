import React from 'react'
import './blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3",
      category: "Real Estate",
      date: "March 15, 2024",
      title: "Top 10 Features of Luxury Rental Homes",
      description: "Discover the must-have features that make luxury rental properties stand out in today's market.",
      author: "John Smith"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3",
      category: "Tips & Tricks",
      date: "March 12, 2024",
      title: "How to Choose the Perfect Rental Location",
      description: "Expert advice on selecting the ideal neighborhood for your next rental home.",
      author: "Emma Wilson"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3",
      category: "Market Trends",
      date: "March 10, 2024",
      title: "2024 Rental Market Trends",
      description: "Analysis of the latest trends shaping the rental market this year.",
      author: "Michael Brown"
    }
  ]

  return (
    <>
      <section className='blog-hero'>
        <div className='container'>
          <h1>Our Blog</h1>
          <p>Latest news and insights about real estate</p>
        </div>
      </section>

      <section className='blog-section'>
        <div className='container'>
          <div className='blog-header'>
            <div className='search-box'>
              <input type="text" placeholder="Search articles..." />
              <i className="fa fa-search"></i>
            </div>
            <div className='categories'>
              <button className='category-btn active'>All</button>
              <button className='category-btn'>Real Estate</button>
              <button className='category-btn'>Tips & Tricks</button>
              <button className='category-btn'>Market Trends</button>
            </div>
          </div>

          <div className='blog-grid'>
            {blogPosts.map((post) => (
              <div className='blog-card' key={post.id}>
                <div className='blog-image'>
                  <img src={post.image} alt={post.title} />
                  <span className='category'>{post.category}</span>
                </div>
                <div className='blog-content'>
                  <div className='blog-info'>
                    <span><i className="far fa-calendar"></i> {post.date}</span>
                    <span><i className="far fa-user"></i> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <button className='read-more'>Read More</button>
                </div>
              </div>
            ))}
          </div>

          <div className='pagination'>
            <button className='page-btn active'>1</button>
            <button className='page-btn'>2</button>
            <button className='page-btn'>3</button>
            <button className='page-btn'><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog