import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import img from "../Assets/uniAbuja.jpeg"
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Global/Global'
import axios from "axios"
import Swal from 'sweetalert2'

const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const SignIn = async(e: any) => {
        e.preventDefault()
        await axios.post("http://localhost:2035/api/Login", {
            email,
            password
        }).then((res) => {
            window.localStorage.setItem("UserData", JSON.stringify(res.data.data))
            Swal.fire({
                icon: "success",
                title: "Successfully Signed in",
                timer: 3000
            })
            navigate("/Adminhome")
        })
        .catch((res) => {
            Swal.fire({
                icon: "error",
                title: "An error occured",
                text: res!.response!.data!.message
            })
        })
    }

    

  return (
    <Container>
        <Card onSubmit={SignIn}>
            <Title>
                <Image src={img} />
                <Name>Uni-Abuja</Name>
            </Title>
            <Sign>Sign in</Sign>
            <Namein value={email} required onChange={(e) => {
                setEmail(e.target.value)
            }}  type="email" placeholder='SomeOne@gmail.com'/>
            <Namein value={password} required onChange={(e) => {
                setPassword(e.target.value)
            }}  type="password" placeholder='password'/>

            <Signup>
                <Noacc to="/signup">No Account? <span>Create One!</span></Noacc>
            </Signup>

            <Buttonhold>
                <Button2 type='submit'>Next</Button2>
            </Buttonhold>
        </Card>
    </Container>
  )
}

export default Signin
const Button2 = styled.button`
    width: 125px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px;
    background-color: #219653;
    margin-right: 60px;
    cursor: pointer;
    text-decoration: none;
    color: white;
`
const Button = styled.div`
    width: 125px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B2B2B2;
        margin: 7px;
        cursor: pointer;
`
const Buttonhold = styled.div`
    width: 100%;
    padding-right: 20px;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Noacc = styled(Link)`
    font-size: 15px;
    margin-top: 15px;
    text-decoration: none;
    color: #219653;
    span{
        color: #0067B8;
    }
`
const Signup = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
`
const Namein = styled.input`
    width: 85%;
    height: 40px;
    margin-top: 15px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`
const Sign = styled.h2`
    color: #219653;
    margin: 0;
    margin-top: 15px;
`
const Name = styled.h2`
    color: #219653;
    margin-left: 5px;
    margin: 0;
`
const Image = styled.img`
    height: 55px;
`
const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const Card = styled.form`
    width: 450px;
    height: 350px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    padding-left: 40px;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 25px;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    overflow: hidden;
`