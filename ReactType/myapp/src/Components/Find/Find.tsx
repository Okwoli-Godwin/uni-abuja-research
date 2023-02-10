import React from 'react'
import styled from 'styled-components'
import images from "../Assets/vect.png"
import images2 from "../Assets/mat1.jpg"
import images3 from "../Assets/mat1.jpg"
import {GrCheckmark} from "react-icons/gr"

const Find = () => {
  return (
    <Container>
        
        <Wrapper fd="hgdf">
            <Left>
                <Images src={images} />
            </Left>
            <Right>
                <Up>What is CUR</Up>
                <Nav><Icons><GrCheckmark /></Icons> <p>Center for Undergraduate Research (CUR) is a center which seeks to develop young researchers through grants from within and outside the University</p></Nav>
                <Nav><Icons><GrCheckmark /></Icons><p>It is a Catch Them Young approach to help promote research culture among undergraduate students in University of Abuja</p></Nav>
                <Nav><Icons><GrCheckmark /></Icons> <p>These young researchers are mentored and guided by lecturers on how best to tap into their talents and potentials</p></Nav>
                <Up>Nature of Researches</Up>
                <Nav><Icons></Icons><p>Student researches must be:</p></Nav>
                <Nav>
                    <ul>
                        <li>Original</li>
                        <li>Acceptable</li>
                        <li>Practicable</li>
                        <li>Mentored</li>
                    </ul>
                </Nav>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Find

const Icons = styled.div`
    margin-right: 10px;
`

const Nav2 = styled.div`
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
`

const Up2 = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-family: 'Inria Serif','Garamond',serif;
    font-family: Arial, Nova;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
`

const Nav = styled.div`
    p{
        margin: 0;
        color: #1d1d1d;
        line-height: 1.9rem;
    }
    ul{
        margin-top: -15px;
    }
    color: #132128;
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
    margin-left: 80px;
     @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
`

const Up = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-weight: 500;
    color: #132128;
    margin-top: -5px;
    margin-left: 80px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
    @media screen and (max-width: 425px) {
        font-size: 27px;
        text-align: center;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    @media screen and (max-width: 425px) {
        margin-top: -60px;
    }
`

const Images = styled.img`
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
       width: 70%;
    }
    @media screen and (max-width: 425px) {
       width: 100%;
       /* background-color: red; */
    }
`

const Left = styled.div`
    width: 50%;
    /* background-color: red; */
    height: 400px;
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 425px) {
        margin-top: -65px;
    }
`

const Wrapper = styled.div<{ fd: string }>`
    width: 90%;
    display: flex;
    flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
    padding-bottom: 80px;
    flex-wrap: wrap;
    /* background-color: red; */
     @media screen and (max-width: 1024px) {
        padding-bottom: 20px;
    }
`

const Top = styled.h2`
    font-size: 40px;
    line-height: 48px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`