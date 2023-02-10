import React from 'react'
import styled from 'styled-components'
import images from "../Assets/mat1.jpg"
import images2 from "../Assets/vect.png"
import images3 from "../Assets/mat1.jpg"
import {GrCheckmark} from "react-icons/gr"

const Center = () => {
  return (
    <Container>
        
        
        <Wrapper fd="">
            <P><p>The Centre is managed by Professor Taibat Adebukola Atoyebi (Director) and Dr. Dike Ojji (Deputy Director) in consultation with a Consultative Committee which comprises of representatives from various Faculties in the University. </p></P>
            <P><p>Our activities include disbursement of grants to undergraduate researches to facilitate the actualization of their dreams. Our office is located at the Institute for Legislative Studies, University Abuja Main Campus.</p></P>
            <P><p>A detailed schedule of our activities and up to date of our current events are provided as links on our site at <a href="www.portal.uniabuja.edu.ng/cur">www.portal.uniabuja.edu.ng/cur</a>. The final report of students’ research are published in The Uniabuja Journal for Undergraduate Research which is a biannual publication of the Centre.</p></P>
        
            <Dates><h2>Notable Dates and Deadlines</h2></Dates>

            <Collection>
                <h3>Collection of Form/ call for submission</h3>
                <p>10th -19th February 2020</p>
            </Collection>

            <Collection>
                <h3>Submission of Proposal</h3>
                <p>19th-23rd February 2020</p>
            </Collection>

            <Collection>
                <h3>Proposal Defense/shortlisting of Successful Candidates</h3>
                <p>24th -26th February 2020</p>
            </Collection>

            <Collection>
                <h3>Notification of Shortlisted Candidates</h3>
                <p>27th February 2020</p>
            </Collection>

            <Collection>
                <h3>Preparation for Poster Presentation</h3>
                <p>28th February 2020</p>
            </Collection>

            <Collection>
                <h3>Submission of Camera ready Poster</h3>
                <p>28th Feb. – 8th March 2020</p>
            </Collection>

            <Collection>
                <h3>1st Undergraduate Research Day	</h3>
                <p>12th March 2020</p>
            </Collection>

            <Collection>
                <h3>Disbursement of Grants to successful Students	</h3>
                <p>19th March 2020</p>
            </Collection>
        </Wrapper>
    </Container>
  )
}

export default Center
const Collection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3{
        font-size: 19px;
    }
`
const Dates = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    h1{
        font-size: 30px;
    }
`
const P = styled.div`
    p{

    }
`

const Icons = styled.div`
    margin-right: 10px;
`

const Nav2 = styled.div`
    color: #132128;
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
`

const Up2 = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
    @media screen and (max-width: 425px) {
        font-size: 27px;
        text-align: center;
    }
`

const Nav = styled.div`
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
`

const Up = styled.h3`
    font-size: 32px;
    line-height: 40px;
    font-family: 'Inria Serif','Garamond',serif;
    font-weight: 400;
    color: #132128;
    margin-top: -5px;
    margin-left: 80px;
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