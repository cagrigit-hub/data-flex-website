import React from 'react'

function CircleNumbered({number}) {
  return (
    <div className='bg-primary-focus rounded-full w-16 h-16 flex justify-center items-center flex-shrink-0'><h1 className='righteous font-bold text-2xl text-white'>{number}</h1></div>
  )
}

export default CircleNumbered