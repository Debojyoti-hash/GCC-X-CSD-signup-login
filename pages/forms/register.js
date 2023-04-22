import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components'
import { useFormik } from 'formik'
import {registerValidate} from '../../lib/validate'
import {useRouter} from 'next/router'

async function onSubmit(values){
  const options = {
    method:"POST",
    Headers:{'content-Type':'application/json'},
    body:JSON.stringify(values)
  }
  await fetch('http://localhost:3000/pages/api/auth/signup',options)
  .then(res=>res.json())
  .then((data)=>{
    if(data)router.push('http://localhost:3000')
  })
}

const register = () => {
  const router = useRouter();
  //Formik Hook
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      cpassword:''
    },
    validate: registerValidate,
    onSubmit
  })
  return (
    <div className='bg-black h-[100vh] flex flex-col'>
    <Header />    
    <form action="/forms/validate_admin" method="post" onSubmit={formik.handleSubmit}
    className="bg-gray-950 px-10 h-[50rem] w-[40%] my-4 rounded-md flex flex-col justify-center items-center self-center">
        <Image unoptimized
            src='/user-student.png'
            alt='end-user'
            width='100'
            height='100' 
        />
        <h1 className='text-2xl text-center mb-3 text-white font-semibold'>Alumni / Students Login!</h1>
        
        <input type="email" id="email" name="email" required
        placeholder="Enter your email" 
        className="p-2 my-4 w-[80%] rounded-md bg-gray-800 text-white" 
        {...formik.getFieldProps('email')}/>
        {formik.errors.email && formik.touched.email ?<span className='text-rose-500'>{formik.errors.email}</span>:<></>}
        
        <input type="password" id="password" name="password" required
        placeholder="Enter password" 
        className="p-2 my-4 w-[80%] rounded-md bg-gray-800 text-white"
        {...formik.getFieldProps('password')} />
        {formik.errors.password && formik.touched.password ?<span className='text-rose-500'>{formik.errors.password}</span>:<></>}

        <input type="password" id="password" name="password" required
        placeholder="Confirm password" 
        className="p-2 my-4 w-[80%] rounded-md bg-gray-800 text-white" 
        {...formik.getFieldProps('cpassword')}/>
        {formik.errors.cpassword && formik.touched.cpassword ?<span className='text-rose-500'>{formik.errors.cpassword}</span>:<></>}
        
        <button type="submit" className='bg-purple-950 text-lg text-white w-28 p-2 my-4 rounded-md hover:bg-purple-800 transition-all'>SignUp</button>
        <p className='text-white'>Already registered? - 
          <Link href='/forms/user_login' className='text-blue-500 ml-2 hover:text-blue-400 underline'>
            login here!
          </Link>  
          </p>
        
        <p className='text-white my-2'>or</p>
        <Link href='/' className='w-[80%]'>
        <button className='bg-white w-[100%] flex my-4 p-1 justify-center rounded-2xl transition-all' > 
          <Image unoptimized src='/google.png' alt='google' width='38' height='38' /> 
          <span className='self-center ml-2 text-lg font-semibold'>signup with Google</span>
        </button>
        </Link>

        <Link href='/' className='w-[80%]'>
        <button className='bg-white w-[100%] flex my-4 p-1 justify-center rounded-2xl transition-all'>
          <Image unoptimized src='/github.png' alt='github' width='40' height='40' />
          <span className='self-center ml-2 text-lg font-semibold'>signup with GitHub</span>
          </button>
        </Link>
        </form>
    </div>
  )
}

export default register
