import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Header() {

    const [cur,setCur] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if(cur > 100){
                setCur(1)
            } else{
                setCur(cur => cur+1);
            }
         
          }, 4000);
        
          return () => clearInterval(interval);
    } , [])
  return (
    <header className='py-20 px-3  md:px-32 max-w-7xl mx-auto flex justify-between items-center righteous'>
        <div>
            <Logo cur={cur}/>
           
        </div>
        <div className='flex space-x-3 md:space-x-10 text-base md:text-2xl font-semibold tracking-wide' >
            <Link href="#products">
                <a >Products</a>
            </Link>
            <Link href="#companies">
                <a >Companies</a>
            </Link>
            <Link href="#pricing">
                <a >Pricing</a>
            </Link>
        </div>
    </header>
  )
}

function Logo({cur}) {

    return (
        <label className="swap swap-flip text-center">
            <Link href="/">
                <div className={cur %2 == 0 ? "swap-off" : "swap-on"}>
                    <a className='text-xl md:text-4xl font-bold first-letter:text-primary-focus  tracking-wide'>
                    <span className='text-primary-focus text-5xl'>D</span>ata<span className='text-primary-focus text-5xl tracking-tighter'>F</span>
                        <span className='grad'>l</span>ex
                    </a>
                </div>
            </Link>
            <Link href="/">
                <div className={cur %2 == 0 ? "swap-on" : "swap-off" }>
                    <a className='text-xl md:text-4xl font-bold first-letter:text-primary-focus  tracking-wide'>
                        <span className='text-primary-focus text-5xl ml-2'>DF</span>
                    </a>
                </div>
            </Link>
            </label>
    )
}

export default Header