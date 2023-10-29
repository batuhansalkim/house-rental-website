import React from 'react'
import list from "../../data/list";

export default function RecentCard() {
  return (
    <>
        <div className='content grid3 mtop'>
        {list.map((item,index)=>{
            return(
                <div className="box shadow" key={index}>
                    <div className="img">
                        <img src={item.cover} alt="" />
                    </div>
                    <div className="text">
                        <div className="category flex">
                            <span style={{background: item.category=== "For Sale" ? "#25b5791a" : "#ff98001a",color:item.category === "For Sale" ? "#25b579":"#ff9800"}}>{item.category}</span>
                            <i className='fa fa-heart'></i>
                        </div>
                        <h4>{item.name}</h4>
                        <p>
                            <i className='fa fa-location-dot'></i>
                        </p>
                    </div>
                    <div className="button flex">
                        <div>
                            <button className='btn2'>{item.price}</button>
                            <label htmlFor="">/sqft</label>
                        </div>
                        <span>{item.type}</span>
                    </div>
                </div>
            )
        })}
    </div>
    </>
    
  )
}
