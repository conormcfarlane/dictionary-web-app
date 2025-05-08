import React from 'react'
import logo from '../../../public/images/logo.svg'
import iconMoon from '../../../public/images/icon-moon.svg'

export default function Header({selectedFont,handleFontChange}) {
  const fontChange = (event) => {
    handleFontChange(event.target.value) //Calls the handler from App.jsx
  }
  return (
    <header className='flex justify-between bg-amber-300 w-full'>
        <img src={logo} alt="" />
        <div className='flex items-center'>
            <div className='text-sm'>
              <select
                value={selectedFont}
                onChange={fontChange}
              >
                <option value="Mono">Mono</option>
                <option value="sans-serif">Sans Serif</option>
                <option value="serif">Serif</option>
              </select>
              </div>
            <div className='flex px-2'>
                <img src={iconMoon} alt="" />
                <img src={iconMoon} alt="" />
            </div>
        </div>
       
    </header>
  )
}
