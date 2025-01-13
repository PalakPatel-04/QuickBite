import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import About from '../components/About.jsx'
import Qualities from '../components/Qualities.jsx'
import Menu from "../components/Menu.jsx"
import WhoAreWe from '../components/WhoAreWe.jsx'
import Team from '../components/Team.jsx'
import Reservation from '../components/Reservation.jsx'
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Menu/>
    <Reservation/>
    <WhoAreWe/>
    <Team/>
    <Qualities/>
    <Footer/>
    </>
  )
}

export default Home