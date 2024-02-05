import React, { useState } from 'react'
import { useAuth } from './Logincontext.jsx/LogincontexProvider'
import {useNavigate }from "react-router-dom"
import Login from "./Logincontext.jsx/Login.css"
const LoginPage = () => {
    // calling the useauth from the Logincontext
    const auth = useAuth();

    // to set the user name form the input field 
    const[user, setUser] = useState("")

    //setting the navigate
    const naviagte = useNavigate();

    // 
    const handleloginbtnclick = ()=>{
        // here we are setting the setUser
        auth.login(user)
         // redirecting the user to home after login
        naviagte("/")
        console.log("redirecting the user to home after login")
    }
  return (
    <div className='Login_main_container w-full h-96 flex justify-center items-center '>
        <div className="SecondcontainerCenter flex flex-col p-5 border-2 border-green-400 gap-y-3">
            <div>
                <h3 className='font-sans'>Login/SignUp</h3>
            </div>

            <form action="/" method='get' className='flex flex-col gap-y-3'>
                <div className='email'>
                    <label htmlFor=""  className='text-sm font-sans'>Email / Mobile No:</label>
                    <input type="email" name="email" className='text-sm font-sans w-full py-1 px-2 border-2'  onChange={(e) => {setUser(e.target.value)}}/>
                </div>

                <div className='Password'>
                    <label htmlFor="" className='font-sans'>Password</label>
                    {/* <input type="password" className='w-full py-5'/> */}
                    <input type="password" id="password" name="password" className='text-sm font-sans w-full py-1 px-2 border-2' required/>
                </div>
                
                <div className="terms flex">
                    <input type="checkbox" checked/>
                    <p className='text-xs'>By signin I accept All Terms and Conditions of Shopify.</p>
                </div>

                <div  className='Password  w-full flex justify-center'>
                   <button type='submit' onClick={()=>{handleloginbtnclick()}} className='bg-black w-1/2 hover:w-full text-center text-white transition-w duration-200 py-2 '>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
