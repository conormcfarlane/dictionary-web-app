import React from 'react'
import { useState } from 'react'
import logo from '../../../public/images/logo.svg'
import iconMoon from '../../../public/images/icon-moon.svg'

export default function Header({selectedFont,handleFontChange,toggleDarkMode, isDarkMode}) {
   

  const fontChange = (event) => {
    handleFontChange(event.target.value)
   
  }

  

  return (
    <header className='flex justify-between w-full'>
        <img src={logo} alt="" />
        <div className='flex items-center'>
            <div className='text-sm relative'>
              {/* select dropdown */}
              <select 
                value={selectedFont}
                onChange={fontChange}
                className={`p-2 rounded-md  ${
                  isDarkMode 
                  ? 'active:bg-gray-800 active:on-hovertext-purple-600'
                  : 'bg-white text-black'
                }`}
              >
                <option value="Mono">Mono</option>
                <option value="sans-serif">Sans Serif</option>
                <option value="serif">Serif</option>
                
              </select>
      
              </div>
            <div className='flex px-2'>
                <img src={iconMoon} alt="" onClick={toggleDarkMode} className='cursor-pointer' />
                <img src={iconMoon} alt="" />
            </div>
        </div>
       
    </header>
  )
}
