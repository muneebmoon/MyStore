import React from 'react'

import HomeNavbar from './_components/homeNavbar'
import Link from 'next/link'
import Image from 'next/image'

function Page() {

  const catergories = [
    {
      title: "SHIRTS",
      image: "/assets/image.png",
      to: "#"
    },
    {
      title: "DENIM",
      image: "/assets/image (1).png",
      to: "#"
    },
    {
      title: "TEES",
      image: "/assets/image (2).png",
      to: "#"
    },
    {
      title: "PANTS",
      image: "/assets/image (3).png",
      to: "#"
    },
    {
      title: "SWEATERS",
      image: "/assets/image (4).png",
      to: "#"
    },
    {
      title: "OUTWEAR",
      image: "/assets/image (5).png",
      to: "#"
    },
  ]
  return (
    <>

      <HomeNavbar />

      <main>
        {/* ================ Hero Section =================  */}
        <div className="relative w-full h-[80vh]">
          <div
            className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-center"
          ></div>

          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex flex-col text-white gap-10 items-center justify-center h-full">
            <h2 className='text-4xl font-bold'>Your Cozy Era</h2>
            <p className='text-xl font-bold'>Get peak comfy-chic with new winter essentials</p>
            <Link href="#" className='bg-white text-black py-3 px-15 text-xl'>SHOP NOW</Link>
          </div>
        </div>
        {/* ================= Hero Section End =================== */}


        {/* ================== Category Section =============== */}
        <div className="category-section py-20">
          <div className="heading text-center p-10">
            <h2 className='text-3xl '>Shop by Category</h2>
          </div>
          <div className="catergories flex items-center justify-center gap-5">
            {catergories.map((category, index) => (
              <li key={index} className='list-none'>
                <Link href={category.to} className='flex flex-col items-center justify-center gap-5'>
                  <Image src={category.image} width={250} height={250} alt={category.title} />
                  <p className='text-lg underline'>{category.title}</p>
                </Link>
              </li>

            ))}
          </div>
        </div>
        {/* ================== Category Section END =============== */}

      </main>
    </>
  )
}

export default Page