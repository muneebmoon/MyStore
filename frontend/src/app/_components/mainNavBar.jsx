"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import AuthModal from './authModal';

function MainNavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <nav className='main-nav-bar flex items-center justify-between h-20 px-20 border-b-2 border-[#DDDBDC]'>
                <div className="menu">
                    <ul className='flex items-center justify-center gap-10 font-'>
                        <li><Link href="#">Women</Link></li>
                        <li><Link href="#">Men</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Everworld Stories</Link></li>
                    </ul>
                </div>
                <div className="logo">
                    <h1 className='text-3xl font-bold'>EVERLANE</h1>
                </div>
                <div className="action-btns flex">
                    <Image src="/assets/Frame 1.svg" width={40} height={40} alt='Maginfying glass icon' />
                    <Image src="/assets/Frame 2.svg" width={40} height={40} alt='avartar' onClick={() => setIsModalOpen(true)} />
                    <Image src="/assets/Frame 3.svg" width={40} height={40} alt='cart icon' />
                </div>
            </nav>

            {isModalOpen && (
                <AuthModal setIsModalOpen={setIsModalOpen} />
            )}
        </>
    )
}

export default MainNavBar
