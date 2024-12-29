"use client";
import minifaker from 'minifaker';
import "minifaker/locales/en";
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
        <div>
            {storyUsers.map(user => (
                <div key={user.id}>
                    <Image src={user.img} alt={user.username} width={150} height={150} priority />
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    );
}
