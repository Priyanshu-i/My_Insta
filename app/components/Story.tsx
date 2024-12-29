export default function Story({ img, username }: { img: string; username: string }) {
    return (
        <div>
            <img
                src={img}
                alt={username}
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150")}
            />
            <p>{username}</p>
        </div>
    );
}
