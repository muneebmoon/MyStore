import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Announcement() {
    return (
        <>
            <div className="announcement-bar bg-black flex text-white items-center justify-center gap-2 h-10">
                <span>Get early access on launches and offers. </span>
                <Link href="" className='underline'>Sign Up For Texts</Link>
                <Image src="/assets/ArrowRight.svg" width={18} height={18} alt="Arrow Icon" />
                {/* Image is not shown, fix it later  */}
            </div>
        </>
    )
}

export default Announcement
