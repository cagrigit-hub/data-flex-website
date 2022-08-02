import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
function Hero() {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                'ACCESIBLE',
                'CUSTOMIZABLE',
                'SPECIFIC',
              ],
              backSpeed: 40,
              typeSpeed: 40,
              loop: true,
              showCursor: false,
          
        };
        typed.current = new Typed(el.current, options);
        return () => {
         
          typed.current.destroy();
        }
      } , [])
  return (
    <div className='max-w-7xl mx-auto flex flex-col justify-center items-center mt-32 md:mt-48 lexend tracking-widest' >

        <div style={{fontWeight: 500}} className='mb-6 text-base md:text-2xl lg:text-3xl flex items-center justify-center w-[25rem] md:w-[50rem]'><div className='text-primary w-[40%] text-center' ref={el}></div> <div className='w-[50%]'>DATA FOR EVERYONE</div></div>
        <div className='text-[1.4rem] md:text-4xl lg:text-6xl' style={{fontWeight: 700}} >Data Fits <span className='text-primary'> Best </span> to Your Case</div>
    </div>
  )
}   

export default Hero