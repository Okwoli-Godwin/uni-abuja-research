import React from 'react'
import styled from 'styled-components'
import images from "../Assets/mat1.jpg"
import images2 from "../Assets/vect.png"
import images3 from "../Assets/mat1.jpg"
import {GrCheckmark} from "react-icons/gr"

const Find = () => {
  return (
    <Container>
        <Wrapper fd="">
            <Left>
                <Images src={images2} />
            </Left>
            <Right>
                <Up2>Grant process</Up2>
                <Up3>Semester/Course System</Up3>
                <Nav2><Icons><GrCheckmark /></Icons> Each student selects research topics or projects according to his/her interest and ability in any discipline.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>The student picks, fill and submit Research Grant Expression of Interest form</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons> If shortlisted, a mentor is allocated to student. The student writes and presents proposal for a grant award. Proposals are submitted with Budget and Research flowchart/time frame as attachments.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Student defends research proposal before the Consultative Committee</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Successful proposals are presented before a panel of judges, grant sponsors from within and outside Nigeria and special guests in a research day event.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Grant is awarded to successful students</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>The awardee conducts the research or create an innovative project, concepts, services, and products.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>The results/research findings are presented during CUR Research Day events, community workshops, seminars, conferences, etc.</Nav2>
                <Nav2><Icons><GrCheckmark /></Icons>Research findings are published in the bi annual Uniabuja Journal for Undergraduate Research.</Nav2>
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
    font-size: 18px;
    line-height: 28px;
    font-weight: 200;
    display: flex;
    margin-bottom: 20px;
     @media screen and (max-width: 1024px) {
        margin-left: 0px;
    }
`
const Up3 = styled.h3`
    font-size: 28px;
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