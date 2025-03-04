export default function Stats() {
    const stats = [
      {
        percent: "82%",
        text: "Unused medicines remain at home",
      },
      {
        percent: "11%",
        text: "Unused medicines remain at home",
      },
      {
        percent: "82%",
        text: "Unused medicines remain at home",
      },
      {
        percent: "11%",
        text: "Unused medicines remain at home",
      },
      {
        percent: "82%",
        text: "Unused medicines remain at home",
      },
      {
        percent: "11%",
        text: "Unused medicines remain at home",
      },
      {
        percent: "82%",
        text: "Unused medicines remain at home",
      },
      {
        percent: "11%",
        text: "Unused medicines remain at home",
      },
    ];
  
    // Define positions for eight cards arranged as a plus:
    // Container is 40vw x 40vw. The coordinates are percentages.
    const positions = [
      { top: "-2%", left: "50%" }, // Top center
      { top: "25%", left: "50%" }, // Below top center
      { top: "50%", left: "115%" }, // Right center
      { top: "50%", left: "70%" }, // Left of right center
      { top: "105%", left: "50%" }, // Bottom center
      { top: "77%", left: "50%" }, // Above bottom center
      { top: "50%", left: "-20%" }, // Left center
      { top: "50%", left: "25%" }, // Right of left center
    ];
  
    return (
      <div id="stats" className="outfit-400 my-[12vw] w-[80%] mx-auto">
        {/* Container for plus-shaped layout */}
        <div className="relative w-[40vw] h-[40vw] mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="absolute transition-transform duration-300"
              style={{
                top: positions[index].top,
                left: positions[index].left,
                transform: "translate(-50%, -50%)", // Center at given coordinates
              }}
            >
              <div className="flex flex-col justify-center items-center p-[2vw] bg-blue-100 rounded-xl">
                <h1 className="text-black text-[3.5vw] font-bold">{item.percent}</h1>
                <p className="text-black text-center w-[15vw] text-[1vw]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  