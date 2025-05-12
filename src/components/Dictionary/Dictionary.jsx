import React from 'react'
import iconPlay from '../../../public/images/icon-play.svg'


export default function Dictionary({word, data}) {

  if(!data){
    return <p>Loading....</p>
  }

  const phonetic = data.phonetics?.[0]?.text || 'No Phonetic available'
  const audio = data.phonetics?.find((phonetic) => phonetic.audio)?.audio || null
  // Searches phonetics array for first object that has thruthy audio property
  const partOfSpeech = data.meanings[0]?.partOfSpeech || null

  const handleAudioPlay = () => {
    if(audio) {
      const audioPlayer = new Audio(audio) //creates audio object
      audioPlayer.play() // Plays audio with .play()
    }else{
      alert('No audio available for this word') // Handles case where no audio exists
    }
  }
  const meanings = data.meanings[0]?.definitions.slice(0, 3) || ['No meanings available'] // Slice fuction to limit meanings to 3 max
  console.log(meanings)
  
  return (
    <div className='flex flex-col gap-6'>
      {/* Word/Phonetic/Audio */}
      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        <h1 className='text-3xl font-semibold '>{word}</h1>
        <p className='text-purple-500 col-start-1'>{phonetic}</p>
        <button className='col-start-2 row-start-1 row-span-2 justify-self-end' onClick={handleAudioPlay}>
          <img src={iconPlay} className='h-12 w-12' alt="" />
        </button>
      </div>
      {/* Part Of Speech */}
      <div className='flex items-center gap-6'>
        <p className='text-lg'>{partOfSpeech}</p>
        <hr className='w-full text-gray-200' />
      </div>

      {/* Meanings */}
      <div>
        <p className='text-base text-gray-500'>Meaning</p>
        <ul className='list-inside'>
          {meanings.map((meanings,index) => {
            return(
               <li key={index} className='pb-4 list-disc'>
                {meanings.definition}
               </li>
            )
          })}
        </ul>
      </div>


    </div>
  )
}
