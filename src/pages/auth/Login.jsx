
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';


import coin from '../../assets/coin.jpg';

import { loginDetails } from '../../utils/app';


const Login = () => {

  const [credentials, setCredentials] = useState({ usernameOrEmail: '', password: '' });
  const [loading,setLoading]=useState(false)
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
        setLoading(true)
      const data = await loginDetails(credentials);
      setLoading(false)
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false)
    }
  };

  return (
<>



        <section className="h-screen">
            <div className="flex h-full xs:block lg:flex mx-auto">
                <div className="auth w-[40%] lg:w-[40%] xs:w-full xs:h-screen lg:px-10 xs:px-2 py-8 mx-auto text-white">
                    <Link to="/" className="flex items-center mb-4 gap-2">
                        <BiArrowBack />
                        Go Back
                    </Link>
                    <h1 className="mb-5 font-500 lg:text-xl xs:text-xl">Elite Investment</h1>
                    <h1 className="lg:text-4xl font-700 my-2 xs:text-2xl">Login</h1>
                    <p>Welcome Back</p>
                    <form className="mt-4">
                        <label htmlFor="usernameOrEmail" className="block mb-4 text-[14px]">
                            Email address
                            <input
                                    type="text"
                                    placeholder="Username or Email"
                                    value={credentials.usernameOrEmail}
                                    onChange={(e) => setCredentials({ ...credentials, usernameOrEmail: e.target.value })}
                                className="block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize"
                 
                                required
                            />
                        </label>
                        <label htmlFor="password" className="block text-[14px]">
                            Password
                            <input
                                type="password"
                                placeholder="Password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                required
                                                                className="block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize"
                            />
                        </label>
                        <button  onClick={handleLogin}  className="w-full bg-black h-14 mt-7 rounded-xl" type="button">
                        {
                            loading ?'Loading..... please wait': 'Login'
                           }
                        </button>
                        <button type='button' className="w-full bg-black h-14 mt-3 rounded-xl">
                            Continue with Google
                        </button>

                    </form>
                    <div className="flex mt-4 justify-between items-center">
                        <p className="text-xs">
                            You don't have an account <Link to="/signup" className="underline">Signup</Link>
                        </p>
                    </div>
                </div>
                <div className="w-[60%] lg:w-[60%] xs:hidden lg:block">
                    <div className="w-[80%] flex justify-center rounded-2xl items-center lg:text-5xl auth h-[150px] text-white text-center uppercase border mx-auto">
                        <h1>Investing just got better with us</h1>
                    </div>
                    <div className="text-center w-[60%] pt-5 mx-auto">
                        <p className="uppercase lg:text-xl">
                            Let your money work for you and provide you with a good ROI
                        </p>
                    </div>
                    <div className="w-[80%] mx-auto">
                        <img className="w-full h-[600px]" src={coin} alt="Coin" />
                    </div>
                </div>
            </div>
        </section>



</>


  );
};

export default Login;




















// import { Link } from 'react-router-dom';
// import { BiArrowBack } from 'react-icons/bi';
// import AuthContext from './AuthProvider';
// import { login } from '../../utils/app';
// import coin from '../../assets/coin.jpg';

// const Login = () => {
//     const [credentials, setCredentials] = useState({ usernameOrEmail: '', password: '' });
//     const { setUser, setAccessToken } = useContext(AuthContext);
//     const [error, setError] = useState(null);

//     const handleChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await login(credentials);
//             setUser(data.user);
//             console.log(data.user);
//             setAccessToken(data.accessToken);
        

//         } catch (error) {
//             setError('Login failed. Please check your credentials and try again.');
//             console.error('Login error:', error);
//         }
//     };

//     return (
//         <section className="h-screen">
//             <div className="flex h-full xs:block lg:flex mx-auto">
//                 <div className="auth w-[40%] lg:w-[40%] xs:w-full xs:h-screen lg:px-10 xs:px-2 py-8 mx-auto text-white">
//                     <Link to="/" className="flex items-center mb-4 gap-2">
//                         <BiArrowBack />
//                         Go Back
//                     </Link>
//                     <h1 className="mb-5 font-500 lg:text-xl xs:text-xl">Elite Investment</h1>
//                     <h1 className="lg:text-4xl font-700 my-2 xs:text-2xl">Login</h1>
//                     <p>Welcome Back</p>
//                     <form className="mt-4" onSubmit={handleSubmit}>
//                         <label htmlFor="usernameOrEmail" className="block mb-4 text-[14px]">
//                             Email address
//                             <input
//                                 id="usernameOrEmail"
//                                 name="usernameOrEmail"
//                                 className="block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize"
//                                 type="text"
//                                 placeholder="Username or Email address"
//                                 value={credentials.usernameOrEmail}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <label htmlFor="password" className="block text-[14px]">
//                             Password
//                             <input
//                                 id="password"
//                                 name="password"
//                                 className="block rounded-md outline-none w-full h-12 bg-transparent border border-white px-2 placeholder:text-xs placeholder:capitalize"
//                                 type="password"
//                                 placeholder="Password"
//                                 value={credentials.password}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </label>
//                         <button className="w-full bg-black h-14 mt-7 rounded-xl" type="submit">
//                             Log in
//                         </button>
//                         <button className="w-full bg-black h-14 mt-3 rounded-xl">
//                             Continue with Google
//                         </button>
// 
//                     </form>
//                     <div className="flex mt-4 justify-between items-center">
//                         <p className="text-xs">
//                             You don't have an account <Link to="/signup" className="underline">Signup</Link>
//                         </p>
//                     </div>
//                 </div>
//                 <div className="w-[60%] lg:w-[60%] xs:hidden lg:block">
//                     <div className="w-[80%] flex justify-center rounded-2xl items-center lg:text-5xl auth h-[150px] text-white text-center uppercase border mx-auto">
//                         <h1>Investing just got better with us</h1>
//                     </div>
//                     <div className="text-center w-[60%] pt-5 mx-auto">
//                         <p className="uppercase lg:text-xl">
//                             Let your money work for you and provide you with a good ROI
//                         </p>
//                     </div>
//                     <div className="w-[80%] mx-auto">
//                         <img className="w-full h-[600px]" src={coin} alt="Coin" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;