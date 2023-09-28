import React, { useState } from 'react'
import { login } from '../abc'
import './style.css'

const LoginExample = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]= useState('')
    const [loggedin,setLoggedin]=useState(false)
    const [error,setError]=useState('')
    const submitForm  = async (e) => {
            e.preventDefault();
            try {
                await  login({username,password})
                setLoggedin(true)
            } catch (error) {
            setError('Incorrect username and password')
            setUsername('')
            setPassword('')
            }
        
    };
    
  return (
    <>
    <div className='login_container' >

    { loggedin? <>
    <h2>Welcome to our page</h2>
    <button onClick={() => {setLoggedin(false)}} > log Out</button>
    </>
    :
    <>
    
        <form onSubmit={submitForm} className='form' >
        <br/>
        {error}
        <h3> Login Page </h3><br/>
        <input type='text' placeholder='Username' value={username} onChange={(e)=>{setUsername(e.currentTarget.value)}} /><br/>

        <input type='password' placeholder='Password' value={password} onChange={(e) => {setPassword(e.currentTarget.value)}} /><br/>

        <button type='submit' >
            Log In
        </button>

      </form>
      </> }

      {/* <form onSubmit={submitForm} >
        <br/>
        <h3> Login Page </h3><br/>
        <input type='text' placeholder='Username' value={username} onChange={(e)=>{setUsername(e.currentTarget.value)}} /><br/>

        <input type='password' placeholder='Password' value={password} onChange={(e) => {setPassword(e.currentTarget.value)}} /><br/>

        <button type='submit' >
            Log In
        </button>

      </form> */}

      </div>
    </>
  )
}

export default LoginExample
