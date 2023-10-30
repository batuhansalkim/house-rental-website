import React from 'react'
import Heading from "../../common/header/Heading";
import team from "../../data/team";
import "./team.css";

function Team() {
  return (
    <>
        <section className='team background'>
            <div className="container">
                <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>

                <div className="content mtop grid3">
                    {team.map((item,index)=>(
                        <div className="box" key={index}>
                            <button className='btn3'>{item.list} Listing</button>
                            <div className="details">
                                <div className='img'>
                                    <img src={item.cover} alt="" />
                                    <i className='fa-solid fa-circle-check'></i>
                                </div>
                                <i className='fa fa-location-dot'></i>
                                <label>{item.address}</label>
                                <h4>{item.name}</h4>

                                <ul>
                                    {item.icon.map((icon,index)=>(
                                        <li key={index}>{icon}</li>
                                    ))}
                                </ul>
                                <div className='button flex'>
                                    <button>
                                        <i className='fa fa-envelope'></i> Message
                                    </button>
                                    <button  className='btn4'>
                                        <i className='fa fa-phone-alt'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Team