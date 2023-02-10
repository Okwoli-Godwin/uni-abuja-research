import React from 'react'
import {useRoutes} from "react-router-dom"
import About from './About/About'
import Admin from './Admin/Admin'
import Contact from './Contact/Contact'
import Gallery from './Gallery/Gallery'
import Homescreen from './Homescreen/Homescreen'
import Signin from './SignIn/SignIn'
import Signup from "./Signup/Signup"
import UploadPage from './UploadPage/UploadPage'

const Allroutes = () => {
    let element = useRoutes([
        {
            path: "/",
            children: [
                {
                    index: true,
                    element: <Homescreen />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/gallery",
                    element: <Gallery />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/upload",
                    element: <UploadPage />
                },
                {
                    path: "Admin",
                    children: [
                        {
                            index: true,
                            element: <Signin />
                        },
                    ]
                },
            ]
        },
        {
            path: "/signin",
             element: <Signin />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/Adminhome",
            element: <Admin />
        }
    ])
  return element
}

export default Allroutes