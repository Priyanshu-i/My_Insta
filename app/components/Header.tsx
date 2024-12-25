import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';


export default function Header() {
    return (
    
        
        <div className="flex items-center justify-between max max-w-6xl">
            {/* Left */}
            <div className="cursor pointer = h-24 w-24 relative hidden lg:inline-grid">
                <Image
                src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
                alt="Instagram Logo"
                layout='fill'
                className='object-contain'
                />
            </div>
            <div className="cursor pointer = h-24 w-10 relative lg:hidden">
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
                <Search className="h-5" text-gray-500/>
            </div>
            <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:border-black rounded-md'/>
        </div>
        {/* Right */}
            <h1>Right side</h1>
        
    </div>
    )
}
