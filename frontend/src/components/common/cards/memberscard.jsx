export default function MembersCard({ data }) {
    return (
      <div className="w-[9vw] text-center h-[10vw]">
        <div className="aspect-square border-2 border-black rounded-full w-full mb-[1.5vw]">
          <img
            src={data?.img}
            alt="Profile image"
            className="h-full w-full object-cover object-top rounded-full"
          />
        </div>
        <div className="details">
          <div className="name outfit-700 text-blue-400 text-[1.1vw]">
            {data?.name}
          </div>
          <div className="role text-[1vw]">{data?.role}</div>
        </div>
      </div>
    );
  }
  