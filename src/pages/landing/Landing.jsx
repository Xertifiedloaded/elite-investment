import React, { useState } from 'react'
import hero from '../../assets/landing.jpg'
import assets from '../../assets/assets.jpg'
import Faq from '../../components/Faq'
export default function Landing() {
    const [click, setClicked] = useState(false)
    const toggleFaq = idx => {
        if (click === idx) {
            return (
                setClicked(null)
            )
        }
        setClicked(idx)
    }
    return (
        <>
            <section className=''>
                <div className='lg:h-[90dvh] lg:w-screen xs:w-full xs:h-[600px]' style={{ backgroundImage: `url(${hero})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className='flex w-full justify-center items-center h-full'>
                        <h1 className='text-white xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl '>Investing is Even Better Now</h1>
                    </div>
                </div>

                <div className='flex lg:h-[60dvh] lg:w-[90%]  xs:w-[90%] xs:h-[400px] xs:block sm:flex w-[95%] py-4 mx-auto justify-between items-center'>
                    <div className='flex-1'>
                        <img src={assets} className='w-full h-full' alt="" />
                    </div>
                    <div className='flex-1'>
                        <blockquote className='text-lg lg:text-2xl font-italic font-medium leading-normal'>
                            "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for."
                            - Robert Kiyosaki
                        </blockquote>
                    </div>
                </div>
                <Faq/>
            </section>
        </>
    )
}
