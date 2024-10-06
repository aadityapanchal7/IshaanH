import React from 'react';
import { Initiatives } from '../utils/Initiativesinfo';
import { FaLink } from "react-icons/fa6";

function ProjectCard() {
  return (
    <>
      {Initiatives.map((item, index) => (
        <div key={index} className="flex flex-col items-start p-6 mb-6 overflow-hidden bg-white shadow-lg md:flex-row ">


              {/* Image */}
              <img className="flex items-center justify-center object-cover h-auto shadow-md " src={item.image} alt={item.alt} width={item.width} height={item.height} />
  


          {/* Info */}
          <div className=" md:pl-5">
            <h5 className="text-xl font-semibold ">
              {item.title}
            </h5>
            <p className="text-base font-light text-gray-900">
              {item.description}
            </p>
            <div className="flex pt-4 space-x-4">
              <a href={item.link} target='_blank' rel="noopener noreferrer">
                <FaLink className='size-6' />
              </a>
            </div>
          </div>

        </div>
      ))}
    </>
  );
}

export default ProjectCard;
