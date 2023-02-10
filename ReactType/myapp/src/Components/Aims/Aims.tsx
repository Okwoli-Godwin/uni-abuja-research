import React from 'react'
import styled from 'styled-components'

const Aims = () => {
  return (
    <Container>
        <Top><h1>Aims and Objective</h1></Top>
        <Wrapper>
            <Up><h3>Our mandate is to:</h3></Up>
            <First>
                <ul>
                    <li>Mobilize the entire undergraduate students of University of Abuja for sophisticated research skills</li>
                </ul>
            </First>
            <Second>
                <ul>
                    <li>Administer regular undergraduate research grants</li>
                </ul>
            </Second>
            <Second>
                <ul>
                    <li>Organize Undergraduate Research Day every semester, where undergraduate students can present their research findings and interact with industries, government agencies and private organizations nationally and internationally</li>
                </ul>
            </Second>
            <Second>
                <ul>
                    <li>Lead undergraduate students to research exhibitions nationally and internationally</li>
                </ul>
            </Second>
            <Second>
                <ul>
                    <li>Develop and manage Undergraduate Research Journal (Uniabuja Journal for Undergraduate Research), in which scholarly-reviewed undergraduate research papers will be regularly published and circulated.</li>
                </ul>
            </Second>
        </Wrapper>
    </Container>
  )
}

export default Aims
const Second = styled.div`
    li{
        color: #1d1d1d;
        font-size: 18px;
    }
    margin-top: -15px;
    padding-right: 17px;
    /* background-color: red; */
`
const First = styled.div`
    li{
        color: #1d1d1d;
        font-size: 18px;
    }
`
const Up = styled.div`
    h3{
        color: #1d1d1d;
    font-size: 25px;
    }
`
const Top = styled.div`
    h1{
        color: #219653;
        font-size: 35px;
        margin-top: 0px;
         @media screen and (max-width: 425px) {
            font-size: 30px;
        }
        @media screen and (max-width: 425px) {
            font-size: 25px;
        }
    }
`
const Wrapper = styled.div`
    width: 90%;
    /* background-color: red; */
    display: flex;
    padding-left: 45px;
    /* align-items: center; */
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15px;
    overflow: hidden;
`