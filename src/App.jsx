import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './reset.css'
import Header from './components/Header/Header'

function App() {
   const [word, setWord] = useState('keyboard')
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

  const dictionaryDataFetching = async () => {
      setLoading(true) //Start Loading
      setError(null) // Resets error state 

      try{
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        if(!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        setData(result) // Set fetched result
        console.log('This is the result', result)
      }catch(error){
        setError(error) // Set error state
        console.log('Error fetching data', error)
      }finally {
        setLoading(false) // Stop loading
      }
     }

     useEffect(() => {
      dictionaryDataFetching();
     }, [word])

    
  
 


  return (
    <div className='p-6'>
      <Header />
    
     
    </div>
       )
}

export default App
