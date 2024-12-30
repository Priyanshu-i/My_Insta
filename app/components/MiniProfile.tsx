
export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
     <img src="https://th.bing.com/th/id/OIP.HYrmtJbUev0xWt9NU1wA8gHaHC?rs=1&pid=ImgDetMain" 
     alt="user-profile" 
     className="rounded-full h-16 border p-[2px]"
     />
    <div className="flex-1 ml-4">
        <h2 className="font-bold">CoolGuy</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
    </div>
    <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  )
}
