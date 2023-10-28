import React from 'react'
import featuredData from "../../data/featured";
export default function FeaturedCard() {
  return (
    <>
      <div className='content grid5 mtop'>
        {featuredData.map((items,index)=>(
          <div className='box' key={index}>
            
          </div>
        ))}
      </div>
    </>
  )
}
