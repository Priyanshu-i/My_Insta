import React from 'react'
import { Ellipsis, Heart, MessageCircleMore, BookmarkIcon} from 'lucide-react';

export default function Post({img, username, userImg, caption, id}:{img: string, username: string, userImg: string, caption: string, id: string}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* Post Header */}

      <div className="flex items-center p-5">
        <img className="h-12 rounded-full object-cover border p-1 mr-3"src = {userImg} alt = {username} />
        <p className='font-bold flex-1'>{username}</p>
        <Ellipsis className='h-5'/>
        
      </div>

      {/* Post image */}
      <img src = {img} alt="post" className="object-cover w-full"/>

        {/* Post button */}
        <div className='flex justify-between px-4 pt-4'>
            <div className="flex space-x-4 mt-0 mb-3">
                <Heart className='btn'/>
                <MessageCircleMore className='btn'/>
            </div>
                <BookmarkIcon className='btn'/>
        </div>
    </div>
  )
}
