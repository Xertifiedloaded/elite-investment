import React from 'react'

export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <>
       <footer className='mt-4'>
       <div className='text-center'>
                © 2024 Elite Investment Ltd, 2022- {date}
            </div>
       </footer>
        </>
    )
}
