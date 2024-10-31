import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const ErrorPage = () => {
    const navigate =  useNavigate();

    useEffect(() => {
      navigate("/")   
    }, [])
    
   
  return (
    <div>Re-directing...</div>
  )
}

export default ErrorPage