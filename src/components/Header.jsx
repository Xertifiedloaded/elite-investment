import React, { useState } from 'react'
import { FaHamburger, FaUser } from 'react-icons/fa'
import logo from '../assets/logo2.jpg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
export default function Header() {
    const [active, setActive] = useState(false)
    const toggler = () => {
        setActive(!active)
    }
    return (
        <>
            <header className=' shadow-xl py-5  '>
                <div className='flex w-[95%] mx-auto items-center justify-between'>
                    <div>
                        <img className='xs:w-[120px] lg:w-[180px] xs:h-[40px] lg:h-[50px]' src={logo} alt="" />
                    </div>
                    <div className='flex gap-4 relative  items-center '>
                        <div className='xs:block  md:hidden'>
                            <GiHamburgerMenu fontSize={25} onClick={toggler} />
                        </div>

                        <div className='flex xs:hidden md:flex gap-6 '>
                            <Link to='/login'>
                                <button className='w-[120px] hover:bg-black hover:border-0 text-black hover:text-white transition-all duration-300  text-[16px] h-10 border rounded-lg border-creamBorder'>
                                    Login
                                </button>
                            </Link>
                        </div>
                        <div>
                            <div className=' bg-blue-950  w-7 flex items-center justify-center h-7 rounded-full'>
                                <FaUser color='white' />
                            </div>
                        </div>
                        {
                            active &&
                            <nav className='inset-0 md:hidden  bg-black text-white fixed'>
                                <div className='w-[95%] mx-auto py-4'>
                                    <div className='flex justify-end'>
                                        <FaX fontSize={25} onClick={toggler} />
                                    </div>
                                    <div className='block mt-10 '>
                                        <Link to='/login'>
                                            <button className='w-full mb-4 block bg-blue-500 hover:bg-transparent  hover:text-white transition-all duration-300 text-white text-[16px] h-14  rounded-lg'>
                                                Login
                                            </button></Link>

                                    </div>
                                </div>
                            </nav>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}
