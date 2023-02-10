import React from 'react'
import styled from 'styled-components'
import img from "../Assets/direct.jpeg"

const Director = () => {
  return (
    <Container>
        <Top><h1>Director's Welcome Address</h1></Top>
        <Wrapper>
            <Down>
                <Imagehold>
                    <Img src={img} />
                </Imagehold>
            </Down>
            <Up><p>It is my pleasure to welcome you to the Centre for Undergraduate Research where we create a research culture among our undergraduate students. The Centre for Undergraduate Research is established to promote research and create opportunities for undergraduate students across all Departments in the University. The Center helps students attain their full potentials through research thereby building and developing their research skills, and inculcating the spirit of focusing on finding solutions to the challenges plaguing our society. Undergraduate research is a research in which an undergraduate links with a mentor to provide solutions to the problems and challenges in our society. These challenges could be university based, Industrial, community or national issues and policies. The whole concept is to create innovative ideas that will enhance productivity and profitability in the industry and help shape our society. The researches can be carried out in the laboratory, studio, on the field or library based across disciplines.</p></Up>
        </Wrapper>
    </Container>
  )
}

export default Director
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* margin-top: 10px; */
`
const Imagehold = styled.div`
    width: 310px;
    height: 380px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: red;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid #00A85A;
    overflow: hidden;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Up = styled.div`
    p{
        p{
        margin: 0;
        color: #1d1d1d;
        line-height: 1.9rem;
        text-align: justify;
        display: flex;
    }
    font-size: 18px;
    line-height: 28px;
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`
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

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`