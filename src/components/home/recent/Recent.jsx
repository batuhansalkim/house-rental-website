import React from 'react'
import Heading from "../../common/header/Heading";
import "./recent.css";
import RecentCard from './RecentCard';
function Recent() {
  return (
    <>
        <section className='recent padding'>
            <div className="container">
                <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
                <RecentCard/>
            </div>
        </section>
    </>
  )
}

export default Recent;