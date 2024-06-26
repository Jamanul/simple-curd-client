import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleSubmit =(e)=>{
    e.preventDefault()
    const form =e.target;
    const name = form.name.value
    const email = form.email.value
    const user = {name,email}
    console.log(user)
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  return (
    <>
      <h2>Curd client</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='name' /> <br />
        <input type="email" name="email" placeholder='email' /> <br />
        <input type="submit" />
      </form>
        
    </>
  )
}

export default App
