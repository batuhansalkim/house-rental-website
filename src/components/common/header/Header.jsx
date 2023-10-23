import React from 'react'
import "./header.css";
import { Link } from "react-router-dom"
import nav from "../../data/nav";

function Header() {
  return (
    <>
    <header>
        <div className='container flex'>
            <div className="logo">
                <img src="./images/logo.png" alt="" />
            </div>
            <div className="nav">
                <ul>
                    {nav.map((list,index)=>(
                        <li key={index}>
                            <Link to={list.path}>{list.text}</Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    </header>
    </>
  )
}

export default Header