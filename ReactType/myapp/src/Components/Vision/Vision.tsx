import React from 'react'
import styled from 'styled-components'

const Vision = () => {
  return (
    <Container>
        <Wrapper>
            <Top><h2>Discover the right Research Experience Program for you</h2></Top>
            <Visionhold>
                <Visions>
                    <Up><h2>Our Vision</h2></Up>
                    <P><p>The vision of the Center for Undergraduate Research is to create and promote a research culture that seeks to find solutions to challenges that lead to National Development through undergraduate research. .</p></P>
                </Visions>
                <Visions>
                    <Up><h2>Our Mission</h2></Up>
                    <P><p>Our mission is to support and promote critical thinking that will enhance originality of undergraduate students’ research through mentorship.</p></P>
                </Visions>
            </Visionhold>
        </Wrapper>
    </Container>
  )
}

export default Vision
const P = styled.div`
    p{
        font-size: 1.125rem;
    line-height: 1.9rem;
    font-weight: 500;
    /* margin-top: 1rem; */
    /* width: 400px; */
    color: #1d1d1d;
    }
`
const Up = styled.div`
    h2{
        font-size: 35px;
        @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    }
`
const Visions = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding-left: 25px;
    padding-right: 15px;
    padding-bottom: 25px;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    :hover{
        border: 1px solid #00A85A;
    }
    @media screen and (max-width: 768px) {
        width: 43%;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
        margin-bottom: 30px;
    }
`
const Visionhold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Top = styled.div`
    width: 550px;
    h2{
        font-size: 40px;
        color: #00A85A;
        @media screen and (max-width: 768px) {
        width: 100%;
        font-size: 30px;
    }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`