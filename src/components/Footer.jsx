import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className='h-[14vh] bg-[#0a1031] flex items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center '>
          <div className="icon"><MdEmail className='text-4xl' /></div>
          <div className='text-white'>7umairahmed7@gmail.com</div>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <div className="icon"><VscGithub className='text-4xl' /></div>
          <a className='text-white hover:underline' href="https://github.com/7Umair-Ahmed7/" target='_blank'>7Umair-Ahmed7</a>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <div className="icon"><FaLinkedin className='text-4xl' /></div>
          <a className='text-white hover:underline' href="www.linkedin.com/in/7umair-ahmed7" target='_blank'>Umair Ahmed</a>
        </div>

      </footer>
    </>

  )
}

export default Footer
