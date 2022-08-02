import React from 'react'

function CircleIcon({icon , color}) {
  
  return (
    <div className={ "bg-"+color+" "  + 'rounded-full w-20 h-20 flex justify-center items-center flex-shrink-0'}><h1 className='righteous font-bold text-3xl text-white'>{icon}</h1></div>
  )
}

export default CircleIcon



