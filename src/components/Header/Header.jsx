import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import logo from '../../../public/images/logo.svg'
import iconMoon from '../../../public/images/icon-moon.svg'
import iconDown from '../../../public/images/icon-arrow-down.svg'
export default function Header({selectedFont,handleFontChange,toggleDarkMode, isDarkMode}) {
  
  const fonts = ['Mono', 'Sans-serif', 'Sans']
  const [isOpen,setIsOpen] = useState(false)
  const dropdownRef = useRef(null) //Reference to dropdown container

  const fontChange = (font) => {
    handleFontChange(font)
    setIsOpen(false)
   
  }
  const handleIsOpenChange = () => {
    setIsOpen((prev) => !prev)
    console.log('Dropdown state :' + !isOpen)
  }
  
  // Close dropdown whne clicking outside container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown',handleClickOutside)
    return () => {
      document.removeEventListener('mousedown',handleClickOutside)
    }
  }, [])

  return (
    <header className='flex justify-between w-full'>
        <img src={logo} alt="" />
        <div className='flex items-center'>
            <div className='text-sm flex relative gap-4' ref={dropdownRef}>
              <p className='cursor-pointer'
                  onClick={handleIsOpenChange}>
                {selectedFont}
              </p>
              <button className='cursor-pointer pr-5'
                      onClick={handleIsOpenChange}
                      >
                <img src={iconDown} alt="Dropdown Arrow" />
              </button>
              {isOpen && (
                console.log("what"),
                <div className= {`absolute top-7 right-0 shadow-lg rounded-xl w-9/5
                  ${isDarkMode ? 'bg-gray-800 shadow-purple-600 ' : ' bg-white'}`
                  
                }>
                  {fonts.map ((font,index) => (
                    <div
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:text-purple-600"
                      onClick={() => fontChange(font)}
                      >
                        {font}
                    </div>
                  ))}
                </div>
              )}
              </div>
            <div className='flex px-2 gap-5 '>
                <div className={`flex w-12 h-6 p-1 rounded-2xl items-center cursor-pointer transition-all duration-400
                ${isDarkMode ? 'bg-purple-600' : 'bg-gray-400'}`}
                onClick={toggleDarkMode}>
                  <div className={`w-4 h-4 bg-white rounded-2xl transition-all duration-400 shadow-2xl
                    ${isDarkMode ? 'translate-x-6' : 'ml-0'}`
                  }>
                  </div>
                </div>
                <img src={iconMoon} alt="" />
            </div>
        </div>
       
    </header>
  )
}
