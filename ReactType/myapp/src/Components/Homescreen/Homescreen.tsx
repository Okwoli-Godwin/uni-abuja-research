import React from 'react'
import styled from 'styled-components'
import Career from '../Career/Career'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Hero from '../Hero/Hero'
import Join from '../Join/Join'
import Slide from '../Slide/Slide'
import Vision from '../Vision/Vision'

const Homescreen = () => {
  return (
    <div>
        <Header />
        <Hero />
        <br />
        <Vision />
        <br />
        <Career />
        <Slide />
        <Join />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default Homescreen

const Container = styled.div`
    width: 100%;
    height: 400px;
    background-color: red;
`