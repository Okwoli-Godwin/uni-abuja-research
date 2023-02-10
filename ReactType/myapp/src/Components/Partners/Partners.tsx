import React from 'react'
import styled from 'styled-components'
import all from "../Assets/all.png"
import oo from "../Assets/oo.jpeg"
import fbn from "../Assets/fbn.png"
import vu from "../Assets/vu.jpg"
import tiz from "../Assets/tiz.jpg"
import one from "../Assets/partners1.jpg"
import two from "../Assets/direct.jpeg"
import three from "../Assets/blur.jpeg"
import four from "../Assets/clear.jpeg"
import five from "../Assets/prof.jpeg"
import six from "../Assets/partners6.jpg"

const Partners = () => {
  return (
    <Container>
        <Research>
            <h1>Meet Our Team</h1>
        </Research>
        <Wrapper>
            <Card>
                <Top>
                    <Img src={five} />
                </Top>
                <Down>
                    <Up><h2>Dr Taibat Atoyebi</h2></Up>
                    <P><p>Director CUR</p></P>
                </Down>
            </Card>
             <Card>
                <Top>
                    <Img src={oo} />
                </Top>
                <Down>
                    <Up><h2>Dr Dada</h2></Up>
                    <P><p> Member</p></P>
                </Down>
            </Card>
             <Card>
                <Top>
                    <Img src={three} />
                </Top>
                <Down>
                    <Up><h2>Dr Kehinde Akanbi</h2></Up>
                    <P><p> Member</p></P>
                </Down>
            </Card>
             <Card>
                <Top>
                    <Img src={four} />
                </Top>
                <Down>
                    <Up><h2>Dr Hadiza</h2></Up>
                    <P><p>Member</p></P>
                </Down>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Partners
const Research = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #219653;
        font-size: 35px;
        text-align: center;
        @media screen and (max-width: 425px) {
            font-size: 30px;
        }
        @media screen and (max-width: 425px) {
            font-size: 25px;
        }
    }
`
const P = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        color: #1d1d1d;
        margin: 0;
    }
`
const Up = styled.div`
    h2{
        color: #219653;
        font-size: 20px;
    }
`
const Down = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 2px solid #219653; */
`
const Top = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 100px;
    /* background-color: blue; */
`
const Card = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin-top: 15px;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* padding-top: 10px; */
    padding-bottom: 25px;
    /* background-color: red; */
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    margin-top: -70px;
`