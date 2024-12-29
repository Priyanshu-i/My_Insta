import React from 'react';
import Image from 'next/image';
import { Search, CirclePlus, House } from 'lucide-react';


export default function Header() {
    return (
    
<div className="shadow-sm border-b sticky top-0 bg-white z-30">
    <div className="flex items-center justify-between max-w-6xl mx-4 space-x-4 xl:mx-auto">            
        <div className="cursor pointer = h-24 w-24 relative hidden lg:inline-grid">
                <Image
                src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
                alt="Instagram Logo"
                layout='fill'
                className='object-contain'
                />
            </div>
            <div className="cursor pointer = h-24 w-16 relative lg:hidden">
                <Image
                src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg"
                alt="Instagram Logo"
                layout='fill'
                className='object-contain'
                />
            </div>
        {/* Middle */}

        <div className="relative m-1">
            <div className="absolute top-2 left-2">
                <Search className="h-5 text-gray-500"/>
            </div>
            <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:border-black rounded-md'/>
        </div>
        {/* Right */}
        <div className="flex space-x-2 items-center">
            <House className="hidden md:inline-flex h-6 mr-4 cursor-pointer hover:scale-125 transform duration-200 ease-out"/>
            <CirclePlus className="h-6 mr-4 cursor-pointer hover:scale-125 transform duration-150 ease-out" />
            <img src="https://th.bing.com/th/id/OIP.HYrmtJbUev0xWt9NU1wA8gHaHC?rs=1&pid=ImgDetMain" alt="Profile Picture" className="h-10 rounded-full cursor-pointer hover:scale-125 transform duration-200 ease-out"/>
        </div>
    </div>
</div>
    )
}
