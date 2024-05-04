import React from "react";
import DarkThemeBg from "./DarkThemeBg.png";
import LightThemeBg from "./LightThemeBg.png";
import Logo from "./Logo.png";

const Home = ({ darkMode }) => {
  return (
    <div className={`min-h-screen w-full relative overflow-hidden`}>
      <img
        src={darkMode ? DarkThemeBg : LightThemeBg}
        alt="Theme"
        className={`w-full absolute animate-height-opacity-${
          darkMode ? "dark" : "light"
        }`}
      />
      <div className="grid items-center w-full min-h-screen">
        <div className="flex flex-col justify-center md:flex-row gap-10 md:gap-20 w-full h-fit py-32 px-4 relative">
          <img
            src={Logo}
            alt="logo"
            className="h-[25vh] md:h-[30vh] lg:h-[40vh] w-fit transition-transform ease-in-out duration-300 transform-gpu hover:scale-110"
          />
          <div className="flex flex-col gap-2 justify-center items-start z-[10] text-left">
            <h1
              className={`font-bold text-${darkMode ? "white" : "[#045CD3]"}`}
            >
              Bench Mark Capital
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
            >
              <a
                href="#contact"
                className="text-white text-xl mx-8 no-underline hover:tracking-wide duration-100 font-semibold"
              >
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
