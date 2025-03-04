export default function LeadsCard({ data }) {
    return (
      <div className="flex justify-between flex-1 min-w-[450px] w-[20vw] h-[15vw]">
        {/* Profile Image */}
        <div className="aspect-square border-2 border-black rounded-full">
          <img
            src={data?.img}
            alt="Profile image"
            className="h-full w-full object-cover object-top rounded-full"
          />
        </div>
  
        {/* Details */}
        <div className="px-[2vw] flex flex-col justify-center text-[1vw]">
          <div className="des">{data?.description}</div>
          <div className="name outfit-700 mt-[1.5vw] text-[2vw] text-blue-400">
            {data?.name}
          </div>
          <div className="role text-[1.2vw]">{data?.role}</div>
        </div>
      </div>
    );
  }
  