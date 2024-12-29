
export default function Story({ img, username }: { img: string; username: string }) {
    return (
        <div>
            <img className="h-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" src={img} alt={username} onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150")}/>
            <p className="text-xs w-14 truncate">{username}</p>
        </div>
    );
}
