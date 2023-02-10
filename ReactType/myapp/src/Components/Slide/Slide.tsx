import React from 'react'
import styled from 'styled-components'
import img from "../Assets/slide1.svg"
import img2 from "../Assets/prof.jpeg"
import {AiOutlineArrowRight} from "react-icons/ai"
import { NavLink } from 'react-router-dom'

const Slide = () => {
  return (
    <Container>
        <Top><h1>Director's Welcome Address</h1></Top>
        <br />
        <br />
        <Wrapper>
            <Left>
                <Icon src={img} />
                <P>It is my pleasure to welcome you to the Centre for
                    Undergraduate Research where we create a research culture
                    among our undergraduate students. The Centre for
                    Undergraduate Research is established to promote research
                    and create opportunities for undergraduate students......</P>
                <NavLink to="/about" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <G>Read more
                    <Icons>
                        <AiOutlineArrowRight />
                    </Icons>
                </G>
                </NavLink>
            </Left>
            
            <Right>
                <Card src={img2}/>
                <Hold>
                        <Up>Dr. Taibat Atoyebi</Up>
                        <Down>Director Center for Undergraduate Research Uni-Abuja</Down>
                </Hold>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Slide
const Top = styled.div`
    h1{
        font-size: 40px;
        color: #00A85A;
        @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        font-size: 30px;
    }
}
`
const Down = styled.div`
    font-size: .9375rem;
    font-size: .9375rem;
    margin-top: 10px;
    color: #E5F6EE;
    text-align: center;
`
const Hol = styled.div`
    width: 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
`
const Up = styled.div`
    color: white;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 600;
`
const Hold = styled.div`
    width: 450px;
    height: 160px;
    justify-content: center;
    background-color: #10A662;
    position: absolute;
    border-radius: 10px;
    left: 295px;
    flex-direction: column;
    top: 270px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
        width: 100%;
        left: 0;
        right: 0;
        margin-top: 80px;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
        left: 0;
        right: 0;
        margin-top: 30px;
    }
    /* justify-content: space-around; */
`
const Card = styled.img`
    width: 400px;
    height: 410px;
    border-radius: 10px;
    object-fit: cover;
    @media screen and (max-width: 425px) {
       height: 300px;
       object-fit: contain;
    }
`
const Icons = styled.div`
    margin-left: 10px;
    :hover{
        color: #3435A8;
    }
`

const G = styled.div`
    display: flex;
    color: #00A85A;
    margin-top: 50px;
    font-size: 18px;
    cursor: pointer;
    :hover{
        color: #FBAF1B;
    }
`

const P = styled.div`
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #1e2027;
    margin-top: 30px;
    @media screen and (max-width: 425px) {
        margin-top: -30px;
    }
`

const Business = styled.div`
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    margin-top: 30px;
`

const Icon = styled.img`
    height: 70px;
    margin-left: -410px;
    @media screen and (max-width: 425px) {
        display: none;
    }
`

const Left = styled.div`
    width: 40%;
    flex-direction: column;
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`
const Right = styled.div`
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Wrapper = styled.div`
    width: 91%;
    display: flex;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 140px; */
    padding-bottom: 170px;
    flex-direction: column;
`