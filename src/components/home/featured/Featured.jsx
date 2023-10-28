import React from 'react'
import "./featured.css";
import Heading from "../../common/header/Heading";

export default function Featured() {
  return (
    <>
      <section className='featured background'>
        <div className="container">
          <Heading title="Featured Property Types" subtitle="Find All Type of Property."/>
        </div>
      </section>
    </>
  )
}
