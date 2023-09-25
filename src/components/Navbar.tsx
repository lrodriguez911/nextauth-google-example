"use client"

import Link from 'next/link'
import {signIn, useSession} from "next-auth/react";
import Image from 'next/image'

// Navbar
function Navbar() {

  const {data: session} = useSession();

  return (
    <nav className='bg-slate-900 flex items-center  justify-between px-24 py-3 text-white'>
        <Link href="/">
        <h1>NextGoogle</h1>
        </Link>

        {session?.user ? (<div className='flex gap-x-2 items-center'>
            <Link href="/dashboard">
            Dashboard
            </Link>
            <p>{session.user.name} {session.user.email}</p>
            <Image src={session.user.image}  width="100" height="100" alt="user image" />
        </div>) : ( <button onClick={() => signIn()} className='bg-sky-400 px-3 py-2 rounded'>
                Sign In
            </button>)}
    </nav>
  )
}

export default Navbar