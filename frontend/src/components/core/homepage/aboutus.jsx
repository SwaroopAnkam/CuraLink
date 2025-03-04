export default function AboutUs() {
    return (
      <div id="aboutUs" className="flex flex-col items-center py-[5vw] select-none">
        {/* Topic */}
  
        {/* Content Cover */}
        <div className="flex items-center gap-[10vw]">
          {/* Left Column */}
          <div className="flex flex-col gap-[4vw] w-[40vw] text-[2vw] leading-[2.5vw] max-[800px]:text-[1rem] max-[800px]:leading-[1.5rem] max-[800px]:w-auto font-serif italic tracking-wide text-gray-800">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis provident
              necessitatibus iure esse placeat natus similique qui vel. Repellendus tenetur
              dolorem aliquam corrupti blanditiis vel laborum.
            </div>
          </div>
          {/* Right Column */}
          <div className="w-[30vw] max-[800px]:w-auto">
            <img src="genot.png" alt="aboutUs" />
          </div>
        </div>
      </div>
    );
  }
  