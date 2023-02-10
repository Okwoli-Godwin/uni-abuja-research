import React, {useState} from 'react'
import styled from 'styled-components'
import image from "./Assets/about.png"
import abuja from "../Assets/focus.jpg"
import images from "./Assets/andela.svg"
import images2 from "./Assets/andela2.svg"
import { NavLink } from 'react-router-dom'

const Hero = () => {

    const [scroll, SetScroll] = useState<Boolean>(false)

    	const changeHeaderColor = () => {
		if (window.scrollY >= 70) {
			SetScroll(true);
		} else {
			SetScroll(false);
		}
	};
   
	window.addEventListener("scroll", changeHeaderColor);

  return (
    <Container>
        <Card>
            <Top><h1>About Us</h1></Top>
            {/* <Img src={img} /> */}
        </Card>
    </Container>
  )
}

export default Hero
const Card = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
	background-color: rgba(3%, 16%, 16%, 0.6);
	position: absolute;
`

const Text = styled.div`
    font-size: 19px;
`
const Text1 = styled.div`
    font-size: 20px;
`
const Button = styled.div<{wd: string, br: string, bc: string}>`
    width: ${(props) => props.wd};
    height: 70px;
    border-radius: 50px;
    border: ${(props) => props.br};
    background-color: ${(props) => props.bc};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #53aa67;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    margin-top: 60px;
    width: 410px;
    justify-content: space-between;
    z-index: 999;
`
const P = styled.div`
    color: white;
    margin-left: 40px;
    font-size: 18px;
    z-index: 999;
`
const Top = styled.div`
    h1{
        color: white;
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
const Container = styled.div`
	height: 500px;
	width: 100%;
	background-color: black;
	background-image: url(${abuja});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	position: relative;
    text-align: center;
	background-attachment: fixed;
    justify-content: center;
    align-items: center;

	::before {
		content: "";
		height: 100%;
		width: 100%;
		background-color: rgba(3%, 16%, 16%, 0.5);
		position: absolute;
    }
`
const Tex1 = styled.div`
    font-size: 19px;
`
const Tex = styled.div`
    font-size: 20px;
`
const Button2 = styled.div<{wd: string, br: string, bc: string, cr: string}>`
    width: ${(props) => props.wd};
    height: 40px;
    border-radius: 50px;
    border: ${(props) => props.br};
    background-color: ${(props) => props.bc};
    display: flex;
    color: ${(props) => props.cr};
    justify-content: center;
    align-items: center;
    margin-left: 25px;
`

const Lef = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 40px;
`

const Navs = styled(NavLink)<{co: string}>`
    font-size: 20px;
    margin-left: 60px;
    display: flex;
    text-decoration: none;
    color: ${(props) => props.co};
`

const Mid = styled.div`
    
    height: 100%;
    display: flex;
    align-items: center;
`

const Images = styled.img`

`

const Right = styled.div`
    width: 190px;
    height: 100%;
    align-items: center;
    display: flex;
    margin-left: 30px;
`

const Head = styled.div<{bg: string, cl: string}>`
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    z-index: 999;
    position: fixed;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.cl};
    z-index: 999667776889;
    transition: all 350ms;
    border-bottom: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`