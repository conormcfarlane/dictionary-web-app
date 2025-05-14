import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './reset.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Dictionary from './components/Dictionary/Dictionary'


function App() {
  const [selectedFont, setSelectedFont] = useState('Mono')
  const handleFontChange = (font) => {
    setSelectedFont(font)
    document.body.style.fontFamily = font
  }
  const [isDarkMode, setIsDarkMode] = useState(false) // Inital light state 
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode) // Toggle between dark and light
    }

   const [word, setWord] = useState('keyboard') // Default word
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

  const dictionaryDataFetching = async (searchWord) => {
      setLoading(true) //Start Loading
      setError(null) // Resets error state 

      try{
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
        if(!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        setData(result[0]) // Set fetched result
        setWord(searchWord) // !! Updates the word state !!
        console.log('This is the result', result)
      }catch(error){
        setError(error) // Set error state
        console.log('Error fetching data', error)
      }finally {
        setLoading(false) // Stop loading
      }
     }

     //fetch data for default word when page loads ie Keyboard
     useEffect(() => {
      dictionaryDataFetching(word);
     }, [word])

  return (
    <div className={`min-h-screen min-w-screen flex justify-center ${
      isDarkMode ? 'dark bg-black text-white' : 'bg-white text-black'
    }`}>
       <div className='p-6 flex flex-col gap-8
      md:p-10 max-w-[737px] '>
      <Header selectedFont={selectedFont} handleFontChange={handleFontChange} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <SearchBar word={word} dictionaryDataFetching={dictionaryDataFetching} isDarkMode={isDarkMode} />
      {error ? (
          <div className='text-center flex flex-col gap-4 '>
            <p className='text-4xl'>  &#128577; </p>
            <p> No definitions found </p>
            <p>Sorry, we couldn't find any definitions for the word you were looking for. Please try a differnt word or come back at a later time instead</p>
          </div>
      ) : (
          <Dictionary word={word} data={data} isDarkMode={isDarkMode} />
      )}
      
    
    </div>
    </div>
   
       )
}

export default App
