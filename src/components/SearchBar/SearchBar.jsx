import React, { useEffect, useState } from 'react'
import iconSearch from '../../../public/images/icon-search.svg'

export default function SearchBar({word, dictionaryDataFetching, isDarkMode}) {
    const [inputValue, setInputValue] = useState(word) //Tracks input
    const [error, setError] = useState(false)

    useEffect(() => {
        setInputValue(word) // Syncs inputValue with word prop
    },[])


    const handleInputChange = (event) => {
        setInputValue(event.target.value) //handles/update inputValue
        setError(false) //Clears error when user types
    }
    const handleSearch = () => {
        if(!inputValue.trim()){
            setError(true)
            return
        }
        dictionaryDataFetching(inputValue) //Trigger API call passing inputValue
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            if(!inputValue.trim()){
            setError(true)
            return
        }
        
        dictionaryDataFetching(inputValue)
        }
    }
    
  return (
    <>
    <div className='flex flex-col gap-2'>
    <div className={`flex justify-between p-4 rounded-2xl border border-white hover:border-purple-600
        ${error 
        ? 'border-red-500 bg-gray-200'
        : isDarkMode 
        ? 'bg-gray-800 text-white border-gray-600 hover:border-purple-600  ' 
        : 'bg-gray-200 border-gray-300 hover:border-purple-600'}`}>

        <input type="text" 
        value={inputValue} // controlled input
        className='w-9/10 font-bold outline-none' 
        placeholder='Enter a word !'
        onChange={handleInputChange} //When input changes handle/update input state 
        onKeyDown={handleKeyDown}
        /> 
        <div className='flex justify-center items-center w-1/10'>
            <img src={iconSearch} alt="" className='h-4 w-4 cursor-pointer' onClick={handleSearch}
            /> 
        </div>
    </div>
    
    </div>
    {error && (
        <p className="text-red-500 text-sm">Please enter a word to search.</p> // Error message
      )}
    </>
    
  )
}
