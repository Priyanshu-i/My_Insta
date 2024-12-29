"use client";
import minifaker from 'minifaker';
import "minifaker/locales/en";
import { useEffect, useState } from 'react';
import Story from './Story';


export default function Stories() {
    const [storyUsers, setStoryUsers] = useState<{ username: string; img: string; id: number; }[]>([]);
    useEffect(() => {
        const storyUsers = minifaker.array(20, (i) => ({
            username: minifaker.username({ locale: 'en' }).toLocaleLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
            id: i,
        }));
        setStoryUsers(storyUsers);
        console.log(storyUsers);
    }, []);

    return (
        <div className="flex space-x-2 p-6 bg-white mt-4 border-gray-200 border overflow-x-scroll scrollbar-none">
            {storyUsers.map(user => (
                
                <Story key={user.id} username={user.username} img={user.img}/>
                    
            ))}
        </div>
    );
}
