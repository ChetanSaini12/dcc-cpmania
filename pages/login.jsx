import React from 'react'
import { setLogin } from './utils/Isauth'
import { useRouter } from 'next/router';



const Login = () => {
  const router = useRouter();
  const handleLogin = () => {
    setLogin();
    router.push('/');
  }



  return (
    <div id='login'>
      This is the login page
      <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login
