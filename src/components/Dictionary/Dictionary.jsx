import React from 'react'
import iconPlay from '../../../public/images/icon-play.svg'


export default function Dictionary({word, data, isDarkMode}) {

  if(!data){
    return <p>Loading....</p>
  }

  const phonetic = data.phonetics?.[0]?.text || 'No Phonetic available'
  const audio = data.phonetics?.find((phonetic) => phonetic.audio)?.audio || null
  // Searches phonetics array for first object that has thruthy audio property
  const partOfSpeech = data.meanings[0]?.partOfSpeech || null
  const secondPartOfSpeech = data.meanings[1]?.partOfSpeech || null

  const handleAudioPlay = () => {
    if(audio) {
      const audioPlayer = new Audio(audio) //creates audio object
      audioPlayer.play() // Plays audio with .play()
    }else{
      alert('No audio available for this word') // Handles case where no audio exists
    }
  }

  const meanings = data.meanings[0]?.definitions.slice(0, 3) || ['No meanings available for this word'] // Slice fuction to limit meanings to 3 max

  const secondMeanings = data.meanings[1]?.definitions.slice(0, 3) || ['No meanings available for this word'] // Slice fuction to limit meanings to 3 max
  
  const synonyms = data.meanings[0]?.synonyms.slice(0, 3) || ['No Synonyms available for this word']

  const example = data.meanings[1]?.definitions[0]?.example
  const sourceURL = data.sourceUrls[0]
  
  return (
    <div className='flex flex-col gap-6'>


      {/* Word/Phonetic/Audio */}
      <section className='grid grid-cols-2 grid-rows-2 gap-2'>
        <h1 className='text-3xl font-semibold '>{word}</h1>
        <p className='text-purple-600 col-start-1'>{phonetic}</p>
        <button className='col-start-2 row-start-1 row-span-2 justify-self-end' onClick={handleAudioPlay}>
          <img src={iconPlay} className='h-12 w-12' alt="" />
        </button>
      </section>


      {/* Part Of Speech */}
      <section className='flex items-center gap-6'>
        <p className='text-lg'>{partOfSpeech}</p>
        <hr className='w-full text-gray-200' />
      </section>

      {/* Meanings */}
      <section>
        <p className='text-base text-gray-500 pb-2'>Meaning</p>
        <ul className='list-inside list-disc pl-0'>
          {meanings.map((meanings,index) => {
            return(
               <li key={index} className={`pb-4 pl-4 -indent-4 ${isDarkMode ? 'marker:text-purple-600' : 'marker:text-color-black'

               }`}>
                {meanings.definition}
               </li>
            )
          })}
        </ul>

        <div className='flex  gap-6'>
          <p>Synonyms </p>
          <div>
            {synonyms.length > 0 ? (
              synonyms.map((synonyms,index) => {
                return(
                  <p key={index} className='text-purple-600 font-semibold'>
                  {synonyms}
                </p>
                )})
            ) 
            : 
            (
              <p>There are no synonyms available for this word</p>
            )}
          </div>
          
        </div>
      </section>

      {/* Second Part Of Speech pt2. */}
    
      <section className='flex items-center gap-6'>
        <p className='text-lg'>{secondPartOfSpeech}</p>
        <hr className='w-full text-gray-200' />
      </section>
      
      {/* Second Meaning */}

      <section>
        <p className='text-base text-gray-500 pb-2'>Meaning</p>
        <ul className='list-inside list-disc'>
          {secondMeanings.map((secondMeanings,index) => {
            return(
            
              <li key={index} className='pb-4 pl-4 -indent-4'>
                {secondMeanings.definition}
               </li>
               
            )
          })}
        </ul>
        <p className='pl-4 text-gray-500'>"{example}"</p>
      
      </section>

      {/* Source */}
      <section className='border-t border-gray-200'>
        <p className='underline text-gray-500 text-sm pt-6'>Source</p>
        <a
          href={sourceURL}
           target='_blank'
           rel='noopener no referrer'
           className='underline italic'
        >{sourceURL}</a>
      </section>


      

    </div>
  )
}
