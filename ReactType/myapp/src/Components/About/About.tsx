import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Us from '../Us/Us'
import Mission from "../Mission/Mission"
import Solution from '../Solutions/Solutions'
import Aims from '../Aims/Aims'
import Partners from '../Partners/Partners'
import Director from '../Director/Director'

const About = () => {
  return (
    <div>
        <Header />
        <Mission />
        <Aims />
        <br />
        <br />
        <Director />
        <Solution />
        <Partners />
        {/* <Us /> */}
        <Footer />
    </div>
  )
}

export default About