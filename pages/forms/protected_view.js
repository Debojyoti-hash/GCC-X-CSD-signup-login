import React from 'react'
import Image from 'next/image'
import { Header } from '@/components'

const protected_view = () => {
  return (
    <div className='bg-black h-[100vh] flex flex-col'>
    <Header />    
    <form action="/forms/validate_admin" method="post" 
    className="bg-gray-950 p-10 h-[25rem] w-[40%] my-16 rounded-md flex flex-col justify-center items-center self-center">
        <Image unoptimized
            src='/protected.png'
            alt='protected-view'
            width='100'
            height='100' 
        />
        <h1 className='text-2xl text-center mb-3 text-white font-semibold'>Protected View!</h1>
        
        <input type="text" id="access-code" name="access-code" required
        placeholder="Enter authorized access code" 
        className="p-3 my-4 w-[80%] rounded-md bg-gray-800 text-white text-lg" />
        
        <button type="submit" className='bg-purple-950 text-lg text-white w-32 p-2 mt-8 rounded-md hover:bg-purple-800 transition-all'>Get Access!</button>
    </form>
    </div>
  )
}

export default protected_view
