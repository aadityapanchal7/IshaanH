import React from 'react'
import { IoDownloadOutline } from "react-icons/io5";

function Resume() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
    <div className='w-full pt-14 md:pt-0 lg:pb-20' id='Resume'>

      <div className='sticky top-0 w-full py-2 text-xl font-bold text-green-700 md:text-2xl lg:text-3xl bg-white/90'>
        //Resume
      </div>

      <div className='flex w-full h-full md:justify-center md:items-center '>
        <button className='flex px-6 py-3 mt-5 space-x-2 bg-orange-300 shadow-md cursor-pointer rounded-xl hover:bg-orange-200 '>
          <IoDownloadOutline className='flex size-5' />
          <a href="" download >Download</a>
        </button>
      </div>
    </div>
    <footer className="bottom-0 flex justify-center w-full pt-10 text-sm text-center">
        <span className="mb-3">
          © {year} Ishaan Hemrajani All Rights Reserved.
        </span>
      </footer>
    </>
  )
}

export default Resume