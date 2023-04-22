import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'
import { signIn, signOut } from 'next-auth/react'
import {useFormik} from 'formik'
import login_validate from '@/lib/validate'
import {useRouter} from 'next/router'

async function onSubmit(values){
  const status = await signIn('credentials',{
    redirect:false,
    email:values.email,
    password:values.password,
    callbackUrl:"/"
  })

  if(status.ok)router.push(status.url)
}

//Google handler function
async function handleGoogleSignIn(){
  signIn('google',{callbackUrl:"http://localhost:3000"})
}
//Github handler function
async function handleGithubSignIn(){
  signIn('github',{callbackUrl:"http://localhost:3000"})
}

const user_login = () => {
  const router = useRouter();
  //Formik Hook
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validate:login_validate,
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
        placeholder="Enter your password" 
        className="p-2 my-4 w-[80%] rounded-md bg-gray-800 text-white" 
        {...formik.getFieldProps('password')}/>
        {formik.errors.password && formik.touched.password ?<span className='text-rose-500'>{formik.errors.password}</span>:<></>}
        
        <button type="submit" className='bg-purple-950 text-lg text-white w-28 p-2 my-4 rounded-md hover:bg-purple-800 transition-all'>Login!</button>
        <p className='text-white'>Not yet registered? - 
          <Link href='/forms/register' className='text-blue-500 ml-2 hover:text-blue-400 underline'>
            Register here!
          </Link>  
          </p>
        
        <p className='text-white my-2'>or</p>
        <Link href='/' className='w-[80%]'>
        <button onClick={handleGoogleSignIn} className='bg-white w-[100%] flex my-4 p-1 justify-center rounded-2xl transition-all' > 
          <Image unoptimized src='/google.png' alt='google' width='38' height='38' /> 
          <span className='self-center ml-2 text-lg font-semibold'>Login with Google</span>
        </button>
        </Link>

        <Link href='/' className='w-[80%]'>
        <button onClick={handleGithubSignIn} className='bg-white w-[100%] flex my-4 p-1 justify-center rounded-2xl transition-all'>
          <Image unoptimized src='/github.png' alt='github' width='40' height='40' />
          <span className='self-center ml-2 text-lg font-semibold'>Login with GitHub</span>
          </button>
        </Link>
        </form>
    </div>
  )
}

export default user_login
