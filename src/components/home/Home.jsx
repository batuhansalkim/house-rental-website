import React from 'react'
import Hero from './hero/Hero'
import Featured from './featured/Featured'
import Recent from "./recent/Recent";

export default function Home() {
  return (
    <>
      <Hero/>
      <Featured/>
      <Recent/>
    </>
  )
}
