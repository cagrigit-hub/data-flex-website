import React from 'react'
import Link from "next/link"
import Comments from './Comments'
import { companies } from '../../../contents/CompaniesContent/companies'

function Companies() {
  return (
    <div id="companies" className='max-w-7xl mx-auto flex flex-col space-y-6 mt-32 md:mt-40 mb-24'>
        <div className='title flex justify-center items-center '><h1 className='lexend text-3xl md:text-4xl font-extrabold text-gray-500'>Our Clients</h1></div>
        <div className="divider"></div> 
        <div className='flex justify-evenly '>
            {companies && companies.map((company) => (
                <Company key={company.id} image={company.image} link={company.link}/>
            ))}
        </div>
        
        <div className="divider !mb-12"></div> 
    
        <Comments />

    </div>
  )
}


function Company({ image ,link}){
    return (
        <Link href={link}>
          <div className="w-40 lg:w-60 flex justify-center items-center object-fill cursor-pointer">
            <img src={image} alt='company-image' />
            </div>
        </Link>
      
    )
}

export default Companies