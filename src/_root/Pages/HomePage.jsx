import React from 'react'
import Home from '../../components/Home/Home'
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading'

const HomePage = () => {
  return (
    <div>
      <HeroSectionWithHeading backgroundVideo={"/dha.mp4"}/>
      <Home/>
    </div>
  )
}

export default HomePage
