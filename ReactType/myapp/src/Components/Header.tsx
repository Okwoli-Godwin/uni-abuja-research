import React, {useState} from 'react';
import styled from "styled-components";
// import { AiOutlineArrowUp }
// import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import image from "./Assets/unib.png"
import {FiMenu} from "react-icons/fi"
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [show, setShow] = React.useState(false);
    const [drop, setDrop] = useState(false)

    const Toggle = () => {
        setDrop(!drop)
    }

	const changeHeaderColor = () => {
		if (window.scrollY >= 70) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	window.addEventListener("scroll", changeHeaderColor);

  return (
    <>
    {show ? (
        <Container bg='#fff' >
        <Wrapper>
            <Logo>
                <Img src={image} />
            </Logo>
            <Navigation>
                <NavLink to="/" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Home</Nav>
                </NavLink>
                <NavLink to="/about" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>About</Nav>
                </NavLink>
                <NavLink to="/gallery" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Gallery</Nav>
                </NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Contact</Nav>
                </NavLink>
                <Nav>Journal</Nav>
            </Navigation>
            <Button>
                <h5>Apply</h5>
            </Button>
            <Hamburger onClick={Toggle}>
                <FiMenu />
            </Hamburger>
            {drop ? (
                <Dropdown>
                    <Card>
                        <NavLink to="/" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Home</Navhold>
                        </NavLink>
                        <NavLink to="/about" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>About</Navhold>
                        </NavLink>
                        <NavLink to="/gallery" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Gallery</Navhold>
                        </NavLink>
                        <NavLink to="/contact" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Contact</Navhold>
                        </NavLink>
                        <Navhold>Journal</Navhold>
                        <Button2>
                            Apply
                        </Button2>
                    </Card>
                </Dropdown>
            ) : null}
        </Wrapper>
    </Container>
    ) : (
        <Container bg='#fff'>
        <Wrapper>
            <Logo>
                <Img src={image} />
            </Logo>
            <Navigation>
                <NavLink to="/" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Home</Nav>
                </NavLink>
                <NavLink to="/about" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>About</Nav>
                </NavLink>
                <NavLink to="/gallery" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Gallery</Nav>
                </NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                    <Nav>Contact</Nav>
                </NavLink>
                <Nav>Journal</Nav>
            </Navigation>
            <Button>
                <h5>Apply</h5>
            </Button>
            <Hamburger onClick={Toggle}>
                <FiMenu />
            </Hamburger>
            {drop ? (
                <Dropdown>
                    <Card>
                        <NavLink to="/" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Home</Navhold>
                        </NavLink>
                        <NavLink to="/about" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>About</Navhold>
                        </NavLink>
                        <NavLink to="/gallery" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Gallery</Navhold>
                        </NavLink>
                        <NavLink to="/contact" style={({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? '#219653' : '#5f5f5f'
  })}>
                            <Navhold>Contact</Navhold>
                        </NavLink>
                        <Navhold>Journal</Navhold>
                        <Button3>
                            Apply
                        </Button3>
                    </Card>
                </Dropdown>
            ) : null}
        </Wrapper>
        </Container>
        )}
    </>
);
};

export default Header;
const Card = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-color: white;
`
const Dropdown = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    height: 700px;
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    top: 80px;
    justify-content: flex-end;
    width: 100%;
    /* flex-direction: column; */
    /* align-items: center; */
    /* transform: translateY(100%); */
    transition: all 350ms;
`
const Hamburger = styled.div`
    display: flex;
    align-items: center;
    color: black;
    font-size: 30px;
    display: none;
    @media screen and (max-width: 900px) {
        display: flex;
    }
    @media screen and (max-width: 768px) {
        margin-right: 15px;
    }
`
const Img = styled.img`
    height: 70px;
`

const Container = styled.div<{ bg: string; }>`
    height: 80px;
    width: 100%;
    background-color: ${(props) => props.bg};
    border-bottom: #f1f1f1;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    position: sticky;
	top: 0;
	z-index: 19189;
	transition: all 350ms;
`;
const Wrapper = styled.div`
    height: 50px;
    width: 90%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    h1{
        font-size: xx-large;
        font-weight: bolder;
    }
    align-items: center;
    display: flex;
`;
const Navigation = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        display: none;
    }
    /* cursor: pointer; */
    /* background-color: red; */
`;
const Navhold = styled.div`
    font-weight: bolder;
    cursor: pointer;
    color: #444444;
    margin-bottom: 10px;
    margin-top: 40px;
`;
const Nav = styled.div`
    font-weight: bolder;
    cursor: pointer;
    color: #5f5f5f;
`;
const Button3 = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #00A85A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
	color: white;
    margin-top: 25px;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
`;
const Button2 = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #00A85A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
	color: white;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
`;
const Button = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #00A85A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
	color: white;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
    @media screen and (max-width: 900px) {
        display: none;
    }
`;