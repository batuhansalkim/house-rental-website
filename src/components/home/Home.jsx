import React from 'react'
import Hero from './hero/Hero'
import Featured from './featured/Featured'
import Recent from "./recent/Recent";
import Awards from './awards/Awards';
import Location from './location/Location';
import Team from './team/Team';
import Price from './price/Price';
import Footer from '../common/footer/Footer';
export default function Home() {
  return (
    <>
      <Hero/>
      <Featured/>
      <Recent/>
      <Awards/>
      <Location/>
      <Team/>
      <Price/>
      <Footer/>
    </>
  )
}
