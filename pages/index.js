import Head from 'next/head'
import Link from 'next/link'
import { Header, Navbar } from '@/components'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getSession, useSession, signOut } from 'next-auth/react' // Written by me


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data:session} = useSession()  //written by me

  function handleSignOut(){
    signOut()
  }

  return (
    <>
      <Head>
        <title>GCC x CSD</title>
        <meta name="description" content="Official website of the Department of Computer Science - Gurucharan University, Silchar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      {session ? User({session, handleSignOut}):Guest()}
    </>
  )
}

//Guest
function Guest()
{
  return(
  <main className={`${styles.main} h-[100vh] bg-black`} >
  <Link href='/login_as'>
    <button className='bg-blue-300 p-2 rounded-md hover:bg-blue-800 hover:text-white'>Log-in / Register</button>
  </Link>
  </main>
  )
}

//User
function User({session, handleSignOut})
{
  return (
  <main className={`${styles.main} h-[100vh] bg-black`} >
  <Link href='/forms/index'>
    <button onClick={handleSignOut} className='bg-blue-300 p-2 rounded-md hover:bg-blue-800 hover:text-white'>logout</button>
  </Link>
  <h5 className= 'bg-gray-50'>{session.user.name}</h5>
  </main>
  )
}

