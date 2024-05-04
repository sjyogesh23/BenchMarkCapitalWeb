import React from "react";
import Aboutimg from "./AboutImg.png";
const AboutUS = ({ darkMode }) => {
  return (
    <div className={`min-h-screen w-full relative overflow-hidden`}>
      <div className="grid items-center w-full min-h-screen">
        <div className="flex flex-col justify-center md:flex-row gap-10 md:gap-20 w-full h-fit py-32 px-4 relative">
          <div className="flex flex-col gap-2 justify-center items-start z-[10] text-left">
            <h1
              className={`font-bold text-${
                darkMode ? "white" : "[#045CD3]"
              } max-w-[800px]`}
            >
              Make Your Investment as Efficient with our expert advice
            </h1>
            <div className="max-w-[800px]  text-sm md:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </div>
            <button
              className={`py-2 bg-[#045CD3] mt-4 rounded-md  hover:bg-[#024BAF] `}
            ></button>
          </div>
          <img
            src={Aboutimg}
            alt="logo"
            className="hidden md:block h-[25vh] md:h-[30vh] lg:h-[40vh] w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
