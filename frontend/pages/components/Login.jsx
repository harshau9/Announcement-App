import React, { useState } from 'react';

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit = () => {
    const payload={
      email,
      password
    }
    fetch("http://localhost:8080/users/login",{
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json())
    .then(res=>{
      console.log(res)
      localStorage.setItem('token', res.token) 
    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login