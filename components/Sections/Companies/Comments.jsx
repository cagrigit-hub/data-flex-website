import React from 'react'
import {comments} from '../../../contents/CompaniesContent/comments'
function Comments() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:justify-around space-y-8 md:space-y-0'>
        {comments && comments.map((comment) => (
            <Comment key={comment.id} comment={comment.comment} author={comment.author} company={comment.company}/>
        ))}
        
    </div>
  )
}

function Comment({comment, author, company}){ 
    return (
        <div className='text-center flex flex-col  space-y-4 italic font-bold text-sm md:text-xl w-[300px] lexend text-neutral'>
            <div>
                {comment}
            </div>
            <div>
                <div className='text-base font-extrabold'>
                    {author}
                </div>
                <div className='text-base'>
                    {company}
                </div>
            </div>
            
        </div>
    )
}
export default Comments