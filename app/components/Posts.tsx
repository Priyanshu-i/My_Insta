import React from 'react'
import Post from './Post'

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "CoolGuy",
      userImg: "https://th.bing.com/th/id/OIP.HYrmtJbUev0xWt9NU1wA8gHaHC?rs=1&pid=ImgDetMain",
      img: "https://plus.unsplash.com/premium_photo-1728732571646-1a883acdcab9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is a cool post",
    },
    {
      id: "2",
      username: "himawari",
      userImg: "https://th.bing.com/th/id/OIP.HYrmtJbUev0xWt9NU1wA8gHaHC?rs=1&pid=ImgDetMain",
      img: "https://plus.unsplash.com/premium_photo-1729595323646-2165b5098326?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "amazing post",
    },
    {
      id: "3",
      username: "tiger",
      userImg: "https://th.bing.com/th/id/OIP.HYrmtJbUev0xWt9NU1wA8gHaHC?rs=1&pid=ImgDetMain",
      img: "https://media.istockphoto.com/id/1223040139/photo/traditional-architecture-in-nottingham-east-midlands-uk.webp?a=1&s=612x612&w=0&k=20&c=FUX7g5XTYDiUc9gM3jkK9VIvK7zUHg5fewrrV3xIGw8=",
      caption: "looks like azkaban",
    }
  ]

  return (
    <div>
      {posts.map(post => (
        <Post
        key = {post.id}
        id = {post.id}
        username = {post.username}
        userImg = {post.userImg}
        img = {post.img}
        caption = {post.caption}
        />
      ))}
    </div>
  )
}
