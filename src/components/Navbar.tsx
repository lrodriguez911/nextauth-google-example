"use client"

import Link from 'next/link'
import {signIn, useSession} from "next-auth/react";

function Navbar() {

  const {data: session} = useSession();

  return (
    <nav className='bg-slate-900 flex items-center  justify-between px-24 py-3 text-white'>
        <Link href="/">
        <h1>NextGoogle</h1>
        </Link>

        <div className='flex gap-x-2 items-center'>
            <Link href="/dashboard">
            Dashboard
            </Link>
            <button onClick={() => signIn()} className='bg-sky-400 px-3 py-2 rounded'>
                Sign In
            </button>
        </div>
    </nav>
  )
}

export default Navbar