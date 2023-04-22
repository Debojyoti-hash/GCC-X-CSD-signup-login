import React from 'react'
import Image from 'next/image'
import { Header } from '@/components'

const admin_login = () => {
  return (
    <div className='bg-black h-[100vh] flex flex-col'>
    <Header />    
    <form action="/forms/validate_admin" method="post" 
    className="bg-gray-950 p-10 h-[25rem] w-[40%] my-16 rounded-md flex flex-col justify-center items-center self-center">
        <Image unoptimized
            src='/lock.png'
            alt='lock-admin'
            width='100'
            height='100' 
        />
        <h1 className='text-2xl text-center mb-3 text-white font-semibold'>Admin Login!</h1>
        
        <input type="email" id="email" name="email" required
        placeholder="Enter email" 
        className="p-2 my-4 w-[80%] rounded-md bg-gray-800 text-white" />
        
        <input type="password" id="password" name="password" required
        placeholder="Enter password" 
        className="p-2 my-4 w-[80%] rounded-md bg-gray-800 text-white" />
        
        <button type="submit" className='bg-purple-950 text-lg text-white w-28 p-2 mt-6 rounded-md hover:bg-purple-800 transition-all'>Login!</button>
    </form>
    </div>
  )
}

export default admin_login
