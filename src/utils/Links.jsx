import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from 'react';

export const Links = [
  {
    path: "https://instagram.com/ishaan.hemrajani",
    icon: <FaInstagramSquare className=" size-6"/>,
  },
  {
    path: "https://www.linkedin.com/in/ishaan-h/",
    icon: <FaLinkedin className=" size-6"/>,
  },
  {
    path: "mailto:ishaanhemrajani0@gmail.com",
    icon: <MdEmail className=" size-6"/>,
  },
];