import Link from 'next/link';
import React from 'react'

function HomeNavbar() {
    const menus = [
        { title: "Holiday Gifting", to: "#" },
        { title: "New Arrivals", to: "#" },
        { title: "Best Sellers", to: "#" },
        { title: "Clothing", to: "#" },
        { title: "Top & Sweaters", to: "#" },
        { title: "Pants & Jeans", to: "#" },
        { title: "Outerwear", to: "#" },
        { title: "Shoes & Bags", to: "#" },
        { title: "Sale", to: "#" }
    ];

    return (
        <nav>
            <ul className='flex items-center justify-center gap-10 h-20'>
                {menus.map((menu, index) => (
                    <li key={index}>
                        <Link href={menu.to}>{menu.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default HomeNavbar;