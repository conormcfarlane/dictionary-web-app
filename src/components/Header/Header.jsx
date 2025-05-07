import React from 'react'
import logo from '../../../public/images/logo.svg'
import iconMoon from '../../../public/images/icon-moon.svg'

export default function Header() {
  return (
    <header className='flex justify-between bg-amber-300 w-full'>
        <img src={logo} alt="" />
        <div className='flex items-center'>
            <div className='text-sm'><p>Mono</p></div>
            <div className='flex'>
                <img src={iconMoon} alt="" />
                <img src={iconMoon} alt="" />
            </div>
        </div>
       
    </header>
  )
}
