import React from "react";
import { useState } from "react";
import { FaLeaf, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authenticationcontext/Logincontext.jsx/LogincontexProvider";
// import "./App.css";
const LoginModal = () => {
  const auth = useAuth();

  // to set thw user name form the input field
  const [username, setUsername] = useState("");
  
  //setting the navigate
  const naviagte = useNavigate();
  const handleloginbtnclick = () => {
    auth.login(username);
    auth.closeModal();
    // redirecting the user to home after login
    // naviagte("/");
    console.log("redirecting the user to home after login");
  };

  return (
    <>
      {auth.modal && (
        <>
          <div className="Login_main_container w-full h-dvh  fixed">
            <div className="relative w-full h-full flex justify-center ">
              <div className="w-auto h-auto bg-white absolute z-10 top-1/4 lg:left-1/3">
                <div className="SecondcontainerCenter flex flex-col p-5  border-green-400 gap-y-3 ">
                  <div className="flex justify-between">
                    <h3 className="font-sans">Login/SignUp</h3>
                    <button
                      onClick={() => {
                        auth.closeModal();
                      }}
                    >
                      <FaTimes />
                    </button>
                  </div>

                  <form
                    action="/"
                    method="get"
                    className="flex flex-col gap-y-3"
                  >
                    <div className="email">
                      <label htmlFor="" className="text-sm font-sans">
                        Email / Mobile No:
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="text-sm font-sans w-full py-1 px-2 border-2"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>

                    <div className="Password">
                      <label htmlFor="" className="font-sans">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="text-sm font-sans w-full py-1 px-2 border-2"
                        required 
                        onChange={(e)=>{auth.setPassword(e.target.value)}}
                      />
                    </div>

                    <div className="terms flex">
                      <input type="checkbox" checked />
                      <p className="text-xs">
                        By signin I accept All Terms and Conditions of Shopify.
                      </p>
                    </div>

                    <div className="Password  w-full flex justify-center">
                      <button
                        type="submit"
                        onClick={() => {
                          handleloginbtnclick();
                        }}
                        className="bg-black w-1/2 hover:w-full text-center text-white transition-w duration-200 py-2 animate-pulse"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full h-full bg-black opacity-50 absolute z-0"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginModal;
