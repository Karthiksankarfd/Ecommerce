import React,{children} from 'react'
import { useState,useContext,createContext } from 'react'
import { useNavigate } from 'react-router-dom';
// step - 1
// create the context outside the functional componenet
const UserLogincontext = createContext()

export const LogincontexProvider = ({children}) => {
  // setting the Login status
  const [user,setUser] = useState(null);
  console.log(user)

  const[password, setPassword] = useState("")
  console.log(password)

  // creating function for setting the Login status to true
  const login =(login)=>{
    setUser(login);
  }
  // calling the usenavigate hook
  const navigate = useNavigate()
  // creating function for setting the Login status to true
  const logout =()=>{
    setUser(null);
    // conditionally navigating to shoppage
    navigate("/")
  }

  // this is for setting the modal status
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    console.log("setting modal true")
  };

  const closeModal = () => {
    setModal(false);
  };

  const dummyfunction = ()=>{
    console.log("This is from auth.dummyfunction")
  }
  
  return (
    <UserLogincontext.Provider value={{ user,login,logout,modal,openModal,closeModal,dummyfunction,password, setPassword}}>{children}</UserLogincontext.Provider>
  );
};

// this function will return the value of UserLogincontext
export const useAuth = () => {
  return useContext(UserLogincontext);
};


