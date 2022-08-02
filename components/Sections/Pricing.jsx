import React, { useState } from 'react'
import { prices } from '../../contents/PricingContent/prices'
function Pricing() {

  const [checked,setChecked] = useState(false)  
 
  return (
    <div id="pricing" className='max-w-7xl mx-auto '>
        <div>
            <h1 className='lexend text-3xl md:text-4xl text-center mb-8 lg:mb-20'>Affordable Plans For All</h1>
            <div className='flex flex-col items-center justify-center space-y-12'>
               
                <div className='flex text-center flex-col space-y-4'>
                    <h2 className='text-base md:text-3xl lexend font-extrabold text-center text-accent'>You can find the most <span className='underline'>affordable</span> package for you.</h2>
                    <h3 className='text-sm md:text-xl font-bold'>To get more information. Choose your package by clicking here and contact us!</h3>
                </div>


                <div className='cards !mb-48 flex flex-col space-y-12 justify-center items-center lexend'>
                <div className="form-control">
                    <label className="label cursor-pointer space-x-4">
                        <p className={!checked ? 'text-sm md:text-base font-bold' : "text-sm md:text-base font-bold text-gray-400"}>For Once</p>
                        <input type="checkbox" className="toggle toggle-sm md:toggle-md lg:toggle-lg" onChange={() => {setChecked(!checked)}} />
                        <p className={checked ? 'text-sm md:text-base font-bold' : "text-sm md:text-base font-bold text-gray-400"}>Subscribed</p> 
                        <div className={checked ? 'rounded-full bg-accent px-2 py-1 ' : "rounded-full bg-gray-300 px-2 py-1 text-gray-400"} >%25 saved</div>
                    </label>
                    </div>  
                    <div className='flex flex-col lg:flex-row lg:space-y-0 space-y-8 lg:space-x-12'>
                        {prices && prices.map((price) => (
                            <Card key={price.id}
                            pack={price["pack name"]} 
                            features={checked ? price['one-time']['features'] : prices[0]['continually']["features"]}
                            price={checked ? price['one-time']["price"] : price['continually']["price"]}
                            price_detail={checked ? price['one-time']["title"] : price['continually']["title"]}
                            example={checked ? price['one-time']["example"] : price['continually']["example"]}

                            />
                        ))}
                       
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}


function Card({pack,price,price_detail,features,example}) {
    
    return (
        <div className='w-80 md:w-96 flex flex-col justify-evenly bg-[#f3f0eb] p-12 lexend text-black rounded-xl'>
            <div className='mb-4 text-3xl md:text-4xl text-bold '>
                {pack}
            </div>
            <div className='text-xl md:text-2xl text-bold mb-1'>
                {price}
            </div>
            <div className=' text-base md:text-xl text-bold text-accent mb-3'>
                {price_detail}
            </div>
            <div className='flex flex-col text-sm space-y-1'>
                {features && features.map((item,i) => (
                    <div key={i}> ✔ {item}</div>
                ))}
            </div>
          
           <div className='text-xs md:text-sm mt-4'>
            <span className='font-bold text-primary-focus'>Example:</span> {example}
           </div>

           <button className='btn mt-4'>Choose Plan</button>
        </div>
    )
}
export default Pricing