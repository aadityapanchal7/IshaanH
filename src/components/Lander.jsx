import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaArrowRight } from 'react-icons/fa';
import { Links } from '../utils/Links';
import { routes } from '../utils/Routes'

function Lander() {
  return (
    <div className='flex flex-col items-start justify-center min-h-screen leading-relaxed text-black md:box-border md:w-1/2 md:pl-20 pl-14 md:mt-5 md:fixed'>
      <img src='./assets/Ishaan_H.jpg' className='block mb-6 rounded-full shadow-md size-32 md:size-16'/>
      <h1 className='text-4xl font-thin md:text-5xl'>Hey, I am</h1>
      <h1 className='text-4xl font-bold text-green-700 md:text-6xl text-balance'>Ishaan Hemrajani</h1>
      <div className='flex flex-col flex-wrap justify-center pt-3 md:flex-row md:px-0 md:justify-start'>
        <p className='text-sm text-balance'>
          an ambitious high schooler with a <br className='block md:hidden' /> interest for 
          <ReactTyped 
            strings={[
              'Blockchain.', 
              'Research.', 
              'Programming.', 
              'Finance.',
              'Equity.',
            ]} 
            typeSpeed={70}
            backSpeed={50}
            loop
            className='pl-1 font-semibold text-orange-700'
          />
        </p>
      </div>

      {/* Nav Links */}
        <div className='items-center hidden mt-5 md:block'>
        
          {routes.map((route, index) => (
            
              <a
                key={index}
                href={route.path}
              >
                <div className="flex items-center transition-all hover:translate-x-5 hover:text-green-400">
                  <FaArrowRight className="mr-1 " />
                  <span>{route.name}</span>
                </div>
              </a>
            ))}

        </div>


      <div className='flex mt-10 space-x-2'>
        {Links.map((link, index) => (
          <a key={index} href={link.path} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Lander;