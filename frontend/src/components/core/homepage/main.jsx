import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center select-none mt-20">
      {/* Middle Section */}
      <div className="pointer-events-none flex flex-col items-center relative">
        {/* Heading: main logo replaces text */}
        <div className="z-[-1] mt-[2vw]">
          <img
            src="/middlelogo.svg"
            alt="Main Logo"
            className="h-[14vw] w-auto"
          />
        </div>

        {/* SubHeading */}
        <div className="z-[-1] flex justify-center items-center w-[80%]">
          <div className="text-[3.5vw] leading-[5vw] font-serif italic tracking-wide text-center text-black">
            Empowering Health: Your Trusted Marketplace for Authentic Medicines
          </div>
        </div>

        {/* Detail Section */}
        <div className="z-[-1] w-[60%] text-[1.1vw] mx-auto text-center font-light italic tracking-tight text-black">
          We connect patients, pharmacies, and healthcare providers to deliver quality
          medicines at lower prices, ensuring a healthier tomorrow.
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="border-2 border-blue-400 bg-white text-blue-400 rounded-[10px] p-[0.5vw] pl-[1vw] flex gap-[2vw] mt-[1vw] transition-all duration-300 ease-in-out cursor-pointer group hover:bg-blue-400 hover:text-white">
        <span>Want to Try Now</span>
        <div className="transition-transform duration-200 ease-in-out group-hover:-rotate-45">
          <ArrowForwardIcon />
        </div>
      </div>

      {/* Quote */}
      <div className="mt-[2vw] text-[1.2vw] font-medium text-black">
        - Maximize Health, Minimise Waste
      </div>
    </div>
  );
}
