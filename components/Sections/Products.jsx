import React from 'react'
import CircleIcon from '../HelperCircles/CircleIcon'

function Products() {
  return (
    <div id="products" className='max-w-7xl mx-auto flex justify-center items-center mt-40'>
        <div className='flex flex-col text-center space-y-12'>
            <div className='text-[1.6rem] md:text-4xl lg:text-5xl lexend mb-4'>Choose <span className='text-primary-focus underline'>Best</span> Pack For Your Case</div>
            <div className='flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-x-12 lg:space-y-0 '>
                <Starter />
                <Median />
                <Advanced />
                <Business />
            </div>
        </div>
    </div>
  )
}



function Starter(){
    return (
        <Card 
        image = "S"
        color = "primary"
        title="Starter Pack"  
        desc={"Starter pack is for your daily life data needs. It includes data analysis, recommendation and one field information."}
        contact="bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded mt-4"
        />
    )
}

function Median(){
    return (
        <Card 
        image = "M"
        color = "accent"
        title="Median Pack"  
        desc={"Starter pack is for your daily life data needs. It includes data analysis, recommendation and one field information."}
        contact="bg-accent hover:bg-accent-focus text-white font-bold py-2 px-4 rounded mt-4"
        
        />

    )
}

function Advanced(){
    return (
        <Card 
        image = "A"
        color = "secondary"
        title="Advanced Pack"  
        desc={"Starter pack is for your daily life data needs. It includes data analysis, recommendation and one field information."}
        contact="bg-secondary hover:bg-secondary-focus text-white font-bold py-2 px-4 rounded mt-4"

        />

    )
}

function Business(){
    return (
        <Card 
        image="B"
        color="neutral"
        title="Business Pack"  
        desc={"Starter pack is for your daily life data needs. It includes data analysis, recommendation and one field information."}
        contact="bg-neutral hover:bg-neutral-focus text-white font-bold py-2 px-4 rounded mt-4"
        />

    )
}


function Card({image,color,title,desc,contact}){
    return (
        <div className='flex flex-col items-center justify-center text-center w-[300px] shadow-md shadow-slate-300 p-12 lexend card-normal'>
            <div>
                <CircleIcon icon={image} color={color} />
            </div>
            <div className='text-2xl font-bold my-4'>{title}</div>
            <div className='text-sm' >{desc}</div>
            <button className={contact}>Contact Us!</button>
        </div>
    )
}

export default Products