import React from 'react'
import { FaLink } from "react-icons/fa6";
import { Research } from '../utils/Research-Card'

function Card() {
  return (
    <>
    {Research.map((info, index) => (
            
    <div key={index} >
      <div className="flex flex-row items-center w-full h-40 gap-4 px-4 mt-5 transition-all duration-500 rounded-lg shadow-lg cursor-pointer hover:translate-y-2 md:w-96 bg-neutral-50 justify-evenly">
        <div className='flex-col '>
          <img className="rounded-full shadow-sm stroke-purple-300 shrink-0" src={info.image} alt={info.alt} width={info.width}/>

          <div className="flex justify-center pt-4 ">
            <a href={info.Link} target='_blank' rel="noopener noreferrer">
              <FaLink className='size-5' />
            </a>
          </div>

        </div>
        <div>
          <span className="font-bold ">{info.Title}</span>
          <p className="space-x-2 text-xs text-gray-400 " >
            {info.Role} {info.Date}
          </p>
          <p className='text-sm leading-relaxed text-balance'>
            {info.Description}
          </p>
        </div>
      </div>
    </div>
    ))}
    </>


  )
}


export default Card