import React from 'react'
import FooterContact from './FooterContact'
import footerdata from '../../data/footer';
import logo from "./footerlogo.png";
import "./footer.css";

function Footer() {
  return (
    <>
    <footer>
        <FooterContact/>
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h2>Do You Need Help With Anything?</h2>
                    <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

                    <div className="input flex">
                        <input type="text"  placeholder='Email Address'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            {footerdata.map((item)=>(
                <div className="box">
                    <h3>{item.title}</h3>
                    <ul>
                        {item.text.map((items)=>(
                            <li>{items.list}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </footer>
    <div className="batuslkm">
        <span>@ 2023 By GorkCoder And <a href='https://www.instagram.com/batuslkm/' >BatuSlkm</a></span>
        {/* target="_blank" */}
    </div>
    </>
    
  )
}

export default Footer