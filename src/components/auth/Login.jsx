import React, { useState } from 'react'




const Login = ({handelLogin}) => {
 


const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    handelLogin(email,password)
    setEmail("")
    setPassword("")
  }


  return (
<div className="flex items-center h-screen w-screen justify-center">
    <div className="border-2 border-red-600 rounded-xl p-20">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center outline-none bg-transparent justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
              
            }} required className='text-black border-2 border-emerald-600 text-xl rounded-full py-4 px-5 placeholder:text-white' type="email" placeholder='write your email' />
            <input
            
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required className='text-black border-2 border-emerald-600 text-xl rounded-full py-4 px-5 mt-3 placeholder:text-white' type="password" placeholder='enter your password'/>
            <button className='text-white border-4 border-indigo-500 outline-none bg-emerald-600 text-xl rounded-full py-4 px-5 mt-3 cursor-pointer'>log in </button>
        </form>


    </div>
<div>
  <h1 className='text-2xl'>for testing</h1>
  <p>password: "123"</p>
  <p>  email: "admin@example.com"
  password: "123"</p>

<p>employee:</p>
<p>firstName: "Arjun",
    email: "employee5@example.com"</p>

<p>firstName: "Neha",
    email: "employee4@example.com"</p>    

    <p>  firstName: "Karan",
    email: "employee3@example.com"</p>
    
    <p>  firstName: "riya",
    email: "employee2@example.com"</p>

    <p>  firstName: "Amit",
    email: "employee1@example.com"</p>
</div>

</div>
  )
}

export default Login
