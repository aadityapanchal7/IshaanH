import React from 'react'
import ProjectCard from './ProjectCard'

function Initiatives() {


  return (
    <div className=' pt-14 md:min-h-screen' id='Initiatives'>
      <div className='sticky top-0 w-full py-2 text-xl font-bold text-green-700 md:text-2xl lg:text-3xl bg-white/100'>
        Initiatives
      </div>
      <ProjectCard />
    </div>

  )
}

export default Initiatives
