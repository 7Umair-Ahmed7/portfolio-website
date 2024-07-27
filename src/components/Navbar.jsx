import React from 'react'
import headerImg from "../assets/6502423.jpg"
import profilePic from "../assets/profile-pic.jpg"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className='bg-[#2C46CC] h-[14vh] py-2 px-4 flex justify-between items-center'>
                <div className='header-image flex items-center gap-4 '>
                    <img src={headerImg} width='60px' alt="" />
                    <h2 className='text-3xl text-white'>Portfolio <span className='text-[#161148] text-xl'>Website</span></h2>
                </div>
                <div className='flex items-center gap-3 '>
                    <div className="profile-pic rounded-full" >
                        <img src={profilePic} className='rounded-full' width='50px' alt="" />
                    </div>
                    <div className='flex gap-2'>
                    <NavLink to="/" className="projects bg-[#2FA7FE] px-2 py-1 rounded-lg ">
                        Home
                    </NavLink>
                    <NavLink to="/projects" className="projects bg-[#2FA7FE] px-2 py-1 rounded-lg ">
                        Projects
                    </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
