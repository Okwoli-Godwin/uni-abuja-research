import React from 'react'
import styled from 'styled-components'

const Cont = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <h1>Get in Touch</h1>
            </Top>
            <Hold>
                <Left>
                    <Up><h3>Contact us</h3></Up>
                    <p>Don't hesitate to reach out to us. We'll respond as soon as possible</p>
                    <a href="cur@uniabuja.edu.ng">cur@uniabuja.edu.ng</a>
                    <Prof><h4>Professor Taibat Adebukola Atoyebi</h4>
                    <a href="taibat.atoyebi@uniabuja.edu.ng">taibat.atoyebi@uniabuja.edu.ng</a>
                    </Prof>
                    <Prof><h4>Dr. Dike Ojji</h4>
                    <a href="dike.ojji@uniabuja.ed.ng">dike.ojji@uniabuja.ed.ng</a>
                    </Prof>
                </Left>
                <Right>
                    <Input placeholder='Name'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Subject'/>
                    <Box placeholder='Message'/>
                    <Button>Submit</Button>
                </Right>
            </Hold>
        </Wrapper>
    </Container>
  )
}

export default Cont
const Prof = styled.div`
    display: flex;
    flex-direction: column;
    a{
        margin-top: -13px;
    }
`
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
    margin-top: 15px;
	color: white;
    :hover{
        transform: scale(0.9);
        background-color: #F5F5F5;
        color: #00A85A;
        border: 1px solid #00A85A;
    };
`;
const Box = styled.textarea`
    /* width: 200px; */
    display: flex;
    padding-left: 15px;
    padding-top: 20px;
    height: 90px;
    border: 1px solid #CED4DA;
    outline: none;
    resize: none;
    ::placeholder{
        font-size: 17px;
    }
`
const Input = styled.input`
    /* width: 100%; */
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    border: 1px solid #CED4DA;
    margin-bottom: 10px;
    ::placeholder{
        font-size: 17px;
    }
`
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    /* background-color: red; */
    @media screen and (max-width: 768px){
        width: 100%;
        margin-top: 15px;
    }
`
const Up = styled.div`
    h3{
        font-size: 23px;
        margin: 0;
    }
`
const Left = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 40px;
    p{

    }
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const Hold = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Top = styled.div`
    h1{
        font-size: 35px;
        color: #00A85A;
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    /* background-color: red; */
    margin-top: 80px;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
`