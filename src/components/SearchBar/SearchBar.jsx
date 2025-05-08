import React, { useEffect, useState } from 'react'
import iconSearch from '../../../public/images/icon-search.svg'

export default function SearchBar({word, dictionaryDataFetching}) {
    const [inputValue, setInputValue] = useState(word) //Tracks input

    useEffect(() => {
        setInputValue(word) // Syncs inputValue with word prop
    },[])


    const handleInputChange = (event) => {
        setInputValue(event.target.value) //handles/update inputValue
    }
    const handleSearch = () => {
        dictionaryDataFetching(inputValue) //Trigger API call passing inputValue
    }
    
  return (
    <div className='flex bg-gray-200 justify-between p-4 rounded-2xl'>
        <input type="text" 
        value={inputValue} // controlled input
        className='w-9/10 font-bold' 
        onChange={handleInputChange} //When input changes handle/update input state 
        /> 
        <div className='flex justify-center items-center w-1/10'>
            <img src={iconSearch} alt="" className='h-4 w-4 cursor-pointer' onClick={handleSearch}/> 
            
            </div>
    </div>
  )
}
