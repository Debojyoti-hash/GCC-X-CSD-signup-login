import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='hidden md:block'>
        <ul className='flex md:gap-10 justify-center bg-black text-white text-md py-4'>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>Home</li>
            </Link>
    <details>
        <summary className='cursor-pointer  hover:border-purple-600'>CSxResources</summary>
            <div className='bg-gray-900 ml-2 mt-2 absolute rounded-md'>
                <Link href='/cs-x-resources/pyqp'>
                    <li className='hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxPYQPs</li>
                </Link>
                <Link href='/cs-x-resources/library'>
                    <li className='hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxLibrary</li>
                </Link>
                <Link href='/cs-x-resources/practicals'>
                    <li className='hover:bg-purple-900 hover:border-purple-600 p-1 px-4 text-sm rounded-md'>CSxPracticals</li>
                </Link>
            </div>
    </details> 

            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>CSxEventBlog</li>
            </Link>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>CSxAlumni</li>
            </Link>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>GCSC</li>
            </Link>
            <Link href='/about'>
                <li className='hover:border-b-2 hover:border-purple-600'>About</li>
            </Link>
        </ul>
      
    </div>
  )
}

export default Navbar
