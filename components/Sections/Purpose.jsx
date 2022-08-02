import React, { useEffect, useRef } from 'react'
import CircleNumbered from '../HelperCircles/CircleNumbered'
import { useCases } from '../../contents/PurposeContent/purposes'

function Purpose() {
  
  return (
    <div className='max-w-7xl px-12 text-center md:text-start md:px-48 mx-auto mt-40 md:mt-60 lg:mt-80 flex  flex-col space-y-12  lexend '>
      
        <div className='text-[1.1rem]  md:text-2xl lg:text-4xl text-accent mb-1 self-center font-bold'>{useCases.length} Case Why You Should Choose DataFlex</div>
        {useCases && useCases.map((useCase)  => (
            <div className='flex space-x-8 md:space-x-16 items-center' key={useCase.number}>
                <CircleNumbered number={useCase.number} />
                <div className='wrapper'>
                    <div className='text-base md:text-xl font-bold mb-2'>{useCase.title}</div>
                    <div className='text-sm md:text-base mb-1'><span className='font-bold text-primary'>Service</span>: {useCase.desc}</div>
                    <div className='text-xs md:text-sm'>Example: {useCase.example}</div>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default Purpose