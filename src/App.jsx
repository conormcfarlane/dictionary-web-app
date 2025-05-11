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
    <div className='p-6 flex flex-col gap-8'>
      <Header selectedFont={selectedFont} handleFontChange={handleFontChange}/>
      <SearchBar word={word} dictionaryDataFetching={dictionaryDataFetching} />
      <Dictionary word={word} data={data} />
      
    
     
    </div>
       )
}

export default App
