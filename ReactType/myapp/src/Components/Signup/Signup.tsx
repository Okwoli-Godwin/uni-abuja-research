import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import img from "../Assets/uniAbuja.jpeg"
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import swal from "sweetalert2"
import { GlobalContext } from '../Global/Global'
import { Link } from 'react-router-dom'

const Create = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [changePassword, setChangepassword] = useState(true)
    const changeIcon = changePassword === true ? false : true
    const {currentUser} = useContext(GlobalContext)
    const navigate = useNavigate()

    const SignUp = async(e: any) => {
        e.preventDefault()
        await axios.post("http://localhost:2035/api/register", {
            name: name,
            email,
            password
        }).then ((res: any) => {
            window.localStorage.setItem("UserData", JSON.stringify(res.data.data))
            swal.fire({
                icon: "success",
                title: "Account Created successfully",
                timer: 3000
            })
            navigate("/Adminhome")
        })
    }


    console.log("This is the current user", currentUser)
    
 return (
    <Container>
        <Card onSubmit={SignUp}>
            <Title>
                <Image src={img} />
                <Name>Uni-Abuja</Name>
            </Title>
            <Sign>Create Account</Sign>
            <Namein value={name} required onChange={(e) => {
                setName(e.target.value)
            }}  type="text"  placeholder='Name' />
            <Namein value={email} required onChange={(e) => {
                setEmail(e.target.value)
            }}  type="email" placeholder='SomeOne@example.com'/>
            <Inputhold>
                <Namein2 value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} type={changePassword ? "password" : "text"} placeholder='Password' minLength={8}/>
            <Iconhold onClick={() => {
                setChangepassword(changeIcon)
            }}>
                {changeIcon ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </Iconhold>
            </Inputhold>

            <Signup>
                <Noacc to="/signin">Already have an account? <span>Sign In</span></Noacc>
            </Signup>

            <Buttonhold>
                <Button2 type='submit'>Next</Button2>
            </Buttonhold>
            {/* <Hold>
                we are the one
            </Hold> */}
        </Card>
    </Container>
  )
}

export default Create
const Hold = styled.div`
    width: 30%;
    height: 120px;
    background-color: red;
    position: relative;
    display: flex;
    justify-content: center;
    ::after{
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        transform: rotate(45deg);
        background-color:red;
        margin-top: -7px;
    }
`


const Iconhold = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    /* background-color: green; */
`
const Inputhold = styled.div`
    /* background-color: red; */
    width: 81%;
    height: 40px;
    margin-top: 15px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    overflow: hidden;
    /* justify-content: center */
`
const Button2 = styled.button`
    width: 125px;
    height: 40px;
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 50px;
    align-items: center;
    background-color: #219653;
    color: white;
    margin-right: 60px;
    cursor: pointer;
    text-decoration: none;
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
    color: black;
    span{
        color: #219653;
        cursor: pointer;
    }
`
const Signup = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
`
const Namein = styled.input`
    width: 80%;
    height: 40px;
    margin-top: 15px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`
const Namein2 = styled.input`
    width: 83%;
    height: 40px;
    /* margin-top: 15px; */
    outline: none;
    border: none;
    /* border-bottom: 1px solid black; */
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
    height: 420px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    padding-left: 40px;
    flex-direction: column;
    padding-top: 40px;
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
