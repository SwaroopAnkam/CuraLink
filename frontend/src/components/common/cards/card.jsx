export default function Card({ data, isEven }) {
    return (
      <div
        className={`flex flex-col gap-[1vw] p-[2vw] rounded-[2vw] relative ${
          isEven ? "bg-blue-100 text-black" : "bg-[#F6F6F6] text-black"
        }`}
      >
        <h1 className="rounded-[15px] w-fit px-[1vw] text-[2vw] font-serif font-bold italic tracking-wide">
          {data.heading}
        </h1>
        <p className="w-[max(18vw,220px)] text-[1vw] mb-[20%] font-serif italic tracking-tight">
          {data.description}
        </p>
        <div className="flex justify-end absolute bottom-[5%] right-[5%]">
          <img
            src="capsule.png"
            alt=""
            className="w-[20%] opacity-40 mix-blend-luminosity"
          />
          <img
            src="capsule.png"
            alt=""
            className="w-[20%] opacity-40 mix-blend-luminosity"
          />
        </div>
      </div>
    );
  }
  