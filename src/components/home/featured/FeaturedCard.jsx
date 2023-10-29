import React from 'react'
import featuredData from "../../data/featured";
import "../../../App.css";
export default function FeaturedCard() {
  return (
    <>
      <div className='content grid5 mtop'>
        {featuredData.map((items,index)=>(
          <div className='box' key={index}>
            <img src={items.cover} alt="" />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}
