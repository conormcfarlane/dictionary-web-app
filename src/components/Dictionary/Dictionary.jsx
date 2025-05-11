import React from 'react'


export default function Dictionary({word, data}) {

  if(!data){
    return <p>Loading....</p>
  }

  const phonetic = data.phonetics?.[0]?.text || 'No Phonetic available'
  return (
    <div>
      <div>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </div>
    </div>
  )
}
