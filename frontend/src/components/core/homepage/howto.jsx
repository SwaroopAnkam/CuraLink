import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function HowTo() {
  const [isBuyer, setIsBuyer] = useState(true);
  const bsControls = useAnimation();
  const stepControls = useAnimation();

  const clickHnadler = (toggle) => {
    setIsBuyer(toggle);
    if (!toggle) {
      // Seller view animation:
      bsControls.start({
        x: "-36.8%",
        transition: { duration: 0.3, ease: "easeInOut" },
      });
      stepControls.start({
        x: "-50%",
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    } else {
      // Buyer view animation:
      bsControls.start({
        x: "-44.4%",
        transition: { duration: 0.3, ease: "easeInOut" },
      });
      stepControls.start({
        x: "0%",
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    }
  };

  return (
    <div className="outfit-400 w-[80%] mx-auto">
      <div className="relative pt-[5vw] my-[3.5vw]">
        {/* Buttons */}
        <div className="absolute flex gap-[2vw] top-0 pl-[4vw] z-[2]">
          <div
            onClick={() => clickHnadler(true)}
            className={`rounded-full h-[10vw] w-[10vw] flex justify-center items-center text-[1.6vw] uppercase transition-all duration-300 ease-in-out cursor-pointer ${
              isBuyer
                ? "bg-blue-100 text-black"
                : "bg-white border-2 border-dashed border-blue-300 text-blue-300 opacity-90"
            }`}
          >
            <span>Buyer</span>
            <div
              className={`transition-transform duration-300 ease-in-out ml-1 ${
                isBuyer ? "rotate-[-45deg]" : "rotate-0"
              }`}
            >
              <ArrowForwardIcon />
            </div>
          </div>
          <div
            onClick={() => clickHnadler(false)}
            className={`rounded-full h-[10vw] w-[10vw] flex justify-center items-center text-[1.6vw] uppercase transition-all duration-300 ease-in-out cursor-pointer ${
              !isBuyer
                ? "bg-blue-100 text-black "
                : "bg-white border-2 border-dashed border-blue-300 text-blue-300 opacity-90"
            }`}
          >
            <span>Seller</span>
            <div
              className={`transition-transform duration-300 ease-in-out ml-1 ${
                !isBuyer ? "rotate-[-45deg]" : "rotate-0"
              }`}
            >
              <ArrowForwardIcon />
            </div>
          </div>
        </div>

        {/* Outer container – add top margin to clear the buttons */}
        <div>
          {/* Up Section */}
          <div className="w-full h-[9vw] z-[3] bg-blue-100 overflow-hidden">
            <motion.div
              id="bsCover"
              initial={{ x: "-44.4%" }}
              animate={bsControls}
              className="z-[9] bg-blue-100  h-full w-[200%] flex gap-[2.8vw]"
            >
              <div className="bg-white rounded-[4vw] h-[150%] relative top-[-50%] w-full"></div>
              <div className="bg-white rounded-[4vw] h-[150%] relative top-[-50%] w-full"></div>
            </motion.div>
          </div>

          {/* Down Section with light blue shadow */}
          <div className="z-[1] h-[20vw] bg-blue-100 opacity-90 rounded-[5vw] overflow-hidden">
            <motion.div
              id="stepCover"
              initial={{ x: "0%" }}
              animate={stepControls}
              className="h-full w-[200%] flex"
            >
              {/* First Box */}
              <div className="h-full w-full flex p-[2vw] justify-evenly relative">
                <div className="absolute top-[55%] w-[70%] h-0 border-2 border-dashed border-black"></div>
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="h-[50%] flex justify-center items-center">
                    <img src="step1buyer.png" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-[2vw] w-[2vw] bg-black text-white rounded-full flex justify-center items-center font-extrabold z-10 text-[1vw]">
                    1
                  </div>
                  <div className="font-bold text-[1.2vw]">Search your medicine</div>
                  <div className="mt-[0.8vw] text-[0.9vw] w-[80%]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="h-[50%] flex justify-center items-center">
                    <img src="step2buyer.png" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-[2vw] w-[2vw] bg-black text-white rounded-full flex justify-center items-center font-extrabold z-10 text-[1vw]">
                    2
                  </div>
                  <div className="font-bold text-[1.2vw]">Add medicine to cart</div>
                  <div className="mt-[0.8vw] text-[0.9vw] w-[80%]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="h-[50%] flex justify-center items-center">
                    <img src="step3buyer.png" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-[2vw] w-[2vw] bg-black text-white rounded-full flex justify-center items-center font-extrabold z-10 text-[1vw]">
                    3
                  </div>
                  <div className="font-bold text-[1.2vw]">Fill your details</div>
                  <div className="mt-[0.8vw] text-[0.9vw] w-[80%]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="h-[50%] flex justify-center items-center">
                    <img src="step4buyer.png" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-[2vw] w-[2vw] bg-black text-white rounded-full flex justify-center items-center font-extrabold z-10 text-[1vw]">
                    4
                  </div>
                  <div className="font-bold text-[1.2vw]">Get your medicines</div>
                  <div className="mt-[0.8vw] text-[0.9vw] w-[80%]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
              </div>

              {/* Second Box */}
              <div className="h-full w-full flex p-[2vw] justify-evenly relative">
                <div className="absolute top-[55%] w-[70%] h-0 border-2 border-dashed border-black"></div>
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="h-[50%] flex justify-center items-center">
                    <img src="step1buyer.png" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-[2vw] w-[2vw] bg-black text-white rounded-full flex justify-center items-center font-extrabold z-10 text-[1vw]">
                    1
                  </div>
                  <div className="font-bold text-[1.2vw]">Search your medicine</div>
                  <div className="mt-[0.8vw] text-[0.9vw] w-[80%]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="h-[50%] flex justify-center items-center">
                    <img src="step2buyer.png" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-[2vw] w-[2vw] bg-black text-white rounded-full flex justify-center items-center font-extrabold z-10 text-[1vw]">
                    2
                  </div>
                  <div className="font-bold text-[1.2vw]">Add medicine to cart</div>
                  <div className="mt-[0.8vw] text-[0.9vw] w-[80%]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="h-[50%] flex justify-center items-center">
                    <img src="step3buyer.png" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-[2vw] w-[2vw] bg-black text-white rounded-full flex justify-center items-center font-extrabold z-10 text-[1vw]">
                    3
                  </div>
                  <div className="font-bold text-[1.2vw]">Fill your details</div>
                  <div className="mt-[0.8vw] text-[0.9vw] w-[80%]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="h-[50%] flex justify-center items-center">
                    <img src="step4buyer.png" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-[2vw] w-[2vw] bg-black text-white rounded-full flex justify-center items-center font-extrabold z-10 text-[1vw]">
                    4
                  </div>
                  <div className="font-bold text-[1.2vw]">Get your medicines</div>
                  <div className="mt-[0.8vw] text-[0.9vw] w-[80%]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
