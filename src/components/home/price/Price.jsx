import React from 'react'
import Heading from "../../common/header/Heading";
import "./price.css";
import PriceCard from './PriceCard';

function Price() {
  return (
    <>
        <section className='price padding'>
            <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
            <PriceCard/>
        </section>
    </>
  )
}

export default Price