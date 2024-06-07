import React, { useState } from 'react'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa'
import { courseOutline } from '../utils'

export default function Faq() {
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
            <div className='mt-5  w-[95%] mx-auto'>
                <h1 className='font-600 xs:text-2xl text-center md:text-5xl '><span className='text-green-400 font-700'>Frequently</span> Ask Question</h1>
                {
                    courseOutline.map((outline) => (
                        <div className='rounded-[10px] mt-4 border p-5' onClick={() => toggleFaq(outline.id)}>
                            <div className='flex justify-between'>
                                <h1 className='md:text-[16px] xs:text-sm font-700'>{outline.heading}</h1>
                                {
                                    click === outline.id ? <BiChevronUp /> : <BiChevronDown />
                                }
                            </div>

                            {
                                click === outline.id ? <div >
                                    <p className='mt-3 opacity-65  font-400'>{outline.overview}</p>
                                </div> : null
                            }

                        </div>
                    ))
                }
            </div>
        </>
    )
}
