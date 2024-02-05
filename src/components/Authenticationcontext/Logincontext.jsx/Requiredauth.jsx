import React from 'react'
import { useAuth } from './LogincontexProvider'
import { Navigate} from 'react-router-dom'
const Requiredauth = ({children}) => {
    const auth  = useAuth()
    if(!auth.user){
        // Return the Navigate component when the user is not authenticated
      return <Navigate to= "/login" /> 
  }
  return children
}

export default Requiredauth;
