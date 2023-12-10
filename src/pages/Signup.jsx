
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fb from "../assets/fb.png";
import appl from "../assets/appl.png";
import google from "../assets/google.png";
import sign from "../assets/sign.png";
import line from "../assets/line.png";

import { AiOutlineEyeInvisible } from 'react-icons/ai'



const Signup = () => {
  return (
    <div>

  <section className='flex'>
        <div className=' shehu border-red-600'>
          <img src={sign} alt="" className='h-fit'/>
        </div>
     
          
     <div className='max-w-full  mx-auto m h-full '>

      <form className=' p-5 lg:mt-20 ' >

        <div className='text-center '>
          {/* <Link to='/'> <img src={post} alt="" /></Link>  */}
        {/* <h1 className=''>Join Blogg</h1> */}
        <p className=' px-2 text-xl font-light mb- '>Enter your details to create an account with us</p>

          </div>
       

        <div className='my-3 '>
          <label className='  font-semibold text-xl '> firstName</label> <br />
          <input type="text" placeholder='enter firstname' className=' border border-emerald-400 w-full p-1 '/>
        </div> 

        <div className='my-3'>
          <labe className='  font-semibold text-xl '> lastName</labe> <br />
          <input type="text" placeholder='enter lastname' className=' border border-emerald-400 w-full p-1 ' />
        </div> 

        <div className='my-3'>
          <labe className='  font-semibold text-xl '> Email Address</labe> <br />
          <input type="email" placeholder='name@example.com' className=' border border-emerald-400 w-full p-1 ' />
        </div>

        <div className='my-3'>
          <labe className='  font-semibold text-xl '> Password</labe> <br />
          <div className=" flex items-center relative">
          <input type="email" placeholder='Password' className=' border border-emerald-400 w-full p-1 ' />
           <AiOutlineEyeInvisible className=' absolute top-2 right-2'/> 
          </div>
        </div> 
      
       <button type='submit' className='bg-blue-500 w-full p-2 my-3 text-white text-xl'>Sign Up</button>
        {/* <p className='pb-2'>Already have an account? <Link to={'/login'}>Sign In</Link></p> */}

        <div className=' flex gap-3 '>
         <img src={line} alt="" className='h-[1px] w-[220px] mt-3' />
          <span>Or</span>
         <img src={line} alt="" className='h-[1px] w-[220px] mt-3' />
        </div>
     
          <button className='w-full text-xl font-semibold my-2 bg-blue-500 p-2 text-white' >Sign up with Google</button>
        

      </form>
     
      </div>

      </section>
    </div>
  )
}

export default Signup