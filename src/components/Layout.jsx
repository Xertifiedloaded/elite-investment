import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { FaBell, FaDollarSign, FaSearch } from 'react-icons/fa';
import { FaMessage, FaX } from 'react-icons/fa6';
import { sidebar } from '../utils';
import { BiLogOut } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Layout() {


    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/signup') {
        return (
            <Outlet />
        );
    }

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export function DashboardLayout() {
    const [selectedName, setSelectedName] = useState(null);
    const [active, setActive] = useState(false)
    const toggler = () => {
        setActive(!active)
    }
    return (
        <>
            <main className='parent p-0 h-screen text-white flex  xs:block lg:flex lg:justify-between '>
                <div className='lg:w-[28%] lg:bg-black xs:hidden lg:px-10 lg:py-10 lg:block  '>
                    <div className=''>
                        <h1 className='text-3xl'>Elite Investment Ltd</h1>
                        <div className='bg-blue-500 px-[20px] mt-10 py-[50px] flex flex-col items-center rounded-[20px]'>
                            <h1 className='text-4xl font-700 flex items-center'><FaDollarSign />100,000</h1>
                            <p className='flex font-600 items-center gap-3 '> <div className='h-4 w-4 flex justify-center items-center rounded-full bg-white'><FaDollarSign color='blue' fontSize={14} /></div> Balance</p>
                        </div>
                    </div>
                    <div className='mt-7 '>
                        <div className='border border-t-0 border-l-0 border-r-0 pb-12'>

                            {
                                sidebar.map((items, i) => (
                                    <Link key={i} to={items.path} className={` flex  rounded-xl hover:bg-blue-600 transition-all duration-300 px-5 h-[55px] gap-2 mt-5 items-center`}>
                                        {items.icon}
                                        <p className='text-lg'>{items.name}</p>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className='flex h-[130px] w-full justify-start items-end'>
                            <div className={` flex rounded-xl hover:bg-blue-600 w-full transition-all duration-300 px-5 h-[55px] gap-2 mt-5 items-center`}>
                                <BiLogOut />
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='lg:w-[70%]  xs:px-4 lg:px-0 text-black  lg:mx-auto xs:w-full '>
                    <header className='flex  xs:hidden lg:flex  items-center justify-between gap-2 '>
                        <h1>Dashboard</h1>
                        <div className='w-[80%] pt-3'>
                            <div className='flex items-center justify-between  gap-10'>
                                <div className='flex h-12 border border-creamBorder px-2  rounded-lg w-[300px] items-center'>
                                    <FaSearch color='blue' />
                                    <input className='w-full h-full px-2 outline-none' type="text" placeholder='Search Here' />
                                </div>
                                <div>
                                    <div className='flex gap-2'>
                                        <FaMessage />
                                        <FaBell />
                                    </div>
                                </div>
                                <div className='flex  items-center gap-3'>
                                    <div className=''>
                                        <h1 className='font-700'>Makinde Olaitan</h1>
                                        <p className='text-xs font-500 text-end'>Full stack Engineer</p>
                                    </div>
                                    <div className='border rounded-full h-[40px] w-[40px] border-black'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <header className='xs:flex items-center justify-between xs:mt-5  lg:hidden'>
                        <h1 className='text-4xl'>Elite Investment</h1>
                        <div className='flex gap-5 items-center'>

                            <GiHamburgerMenu onClick={toggler} fontSize={25} />
                        </div>


                        {
                            active &&
                            <div className='bg-black inset-0 p-4 fixed'>


                                <FaX fontSize={25} color='white' onClick={toggler} />
                                <div className=''>

                                    <div className='bg-blue-500 text-white px-[20px]  mt-10 py-[50px] gap-3 flex justify-center items-center rounded-[20px]'>
                                        <div className='border rounded-full h-[90px] w-[90px] border-white' />
                                        <div>
                                            <h1 className='text-4xl font-700 flex items-center'><FaDollarSign />100,000</h1>
                                            <p className='flex font-600 items-center gap-3 '> <div className='h-4 w-4 flex justify-center items-center rounded-full bg-white'><FaDollarSign color='blue' fontSize={14} /></div> Balance</p>
                                        </div>
                                    </div>

                                    {
                                        sidebar.map((items, i) => (
                                            <Link key={i} to={items.path} className={` flex text-white rounded-xl hover:bg-blue-600 transition-all duration-300 px-5 h-[55px] gap-2 mt-5 items-center`}>
                                            {items.icon}
                                            <p className='text-lg'>{items.name}</p>
                                        </Link>
                                        ))
                                    }
                                    <div className={` flex text-white rounded-xl hover:bg-blue-600 w-full transition-all duration-300 px-5 h-[55px] gap-2 mt-5 items-center`}>
                                        <BiLogOut />
                                        <p>Logout</p>
                                    </div>
                                </div>
                            </div>
                        }

                    </header>
                    <Outlet />
                </div>
            </main>

        </>
    );
}