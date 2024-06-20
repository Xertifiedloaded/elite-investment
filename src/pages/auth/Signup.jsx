import React, { useState } from 'react';
import image from '../../assets/logo2.jpg';
import coin from '../../assets/coin.jpg';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { register } from '../../utils/app';

export default function Signup() {
    const [credentials, setCredentials] = useState({ userName: '', password: '', email: '', lastName: '', firstName: '' });
    const [loading, setLoading] = useState(false)
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const data = await register(credentials);
            console.log('Registration successful:', data);
            setLoading(false)
        } catch (error) {
            console.error('Registration error:', error);
            setLoading(false)
        }
    };

    return (
        <>
            <section className='h-screen'>
                <div className='flex h-full xs:block lg:flex mx-auto'>
                    <div className='auth w-[40%] lg:w-[40%] xs:w-full xs:h-screen lg:px-10 xs:px-2 py-8 mx-auto text-white'>
                        <Link to='/' className='flex items-center mb-4 gap-2'>
                            <BiArrowBack />
                            Go Back
                        </Link>
                        <h1 className='mb-5 font-500 lg:text-xl xs:text-xl'>Elite Investment</h1>
                        <h1 className='lg:text-4xl font-700 my-2 xs:text-2xl'>Create an account</h1>
                        <p>Lets get started</p>
                        <form className='mt-4' onSubmit={handleRegister}>
                            <label htmlFor="userName" className='block mb-4 text-[14px]'>
                                Name
                                <input
                                    value={credentials.userName}
                                    onChange={(e) => setCredentials({ ...credentials, userName: e.target.value })}
                                    className='block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize'
                                    type="text"
                                    placeholder='full name'
                                />
                            </label>
                            <label htmlFor="firstname" className='block mb-4 text-[14px]'>
                                FirstName
                                <input
                                    value={credentials.firstName}
                                    onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}
                                    className='block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize'
                                    type="text"
                                    placeholder='email address'
                                />
                            </label>
                            <label htmlFor="lastname" className='block mb-4 text-[14px]'>
                                LastName
                                <input
                                    value={credentials.lastName}
                                    onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}
                                    className='block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize'
                                    type="text"
                                    placeholder='email address'
                                />
                            </label>
                            <label htmlFor="email" className='block mb-4 text-[14px]'>
                                Email address
                                <input
                                    value={credentials.email}
                                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                    className='block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize'
                                    type="email"
                                    placeholder='email address'
                                />
                            </label>
                            <label htmlFor="password" className='block text-[14px]'>
                                Password
                                <input
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                    className='block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize'
                                    type="password"
                                    placeholder='password'
                                />
                            </label>
                            <button className='w-full bg-black h-14 mt-7 rounded-xl' type="submit">
                                {
                                    loading ? 'Loading..... please wait' : 'Login'
                                }
                            </button>
                            <button className='w-full bg-black h-14 mt-3 rounded-xl' type="button">
                                Register with Google
                            </button>
                        </form>
                        <div className='flex mt-4 justify-end items-center'>
                            <p className='text-xs'>You already have an account <Link to='/login' className='underline'>Login</Link></p>
                        </div>
                    </div>
                    <div className='w-[60%] lg:w-[60%] xs:hidden lg:block'>
                        <div className='w-[80%] flex justify-center rounded-2xl items-center lg:text-5xl auth h-[150px] text-white text-center uppercase border mx-auto'>
                            <h1>Investing just got better with us</h1>
                        </div>
                        <div className='text-center w-[60%] pt-5 mx-auto'>
                            <p className='uppercase lg:text-xl'>Let your money work for you and provide you with a good ROI</p>
                        </div>
                        <div className='w-[80%] mx-auto'>
                            <img className='w-full h-[600px]' src={coin} alt="coin" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}