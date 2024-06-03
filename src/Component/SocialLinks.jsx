import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { BiLogoPlayStore } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
const SocialLinks = ({ darkMode }) => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
          Linkedin
        </>
      ),
      href: "https://www.linkedin.com/in/harrish-arun-1a8890227/",
    },
    {
      id: 2,
      child: (
        <>
          <BiLogoPlayStore size={30} />
          My Apps
        </>
      ),
      href: "https://play.google.com/store/apps/developer?id=HarrishArun",
    },
    {
      id: 3,
      child: (
        <>
          <FaGithub size={30} />
          Github
        </>
      ),
      href: "https://github.com/HarrishArun",
    },

    {
      id: 4,
      child: (
        <>
          <FaDownload size={30} />
          Resume
        </>
      ),
      href: "/resume.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          <HiOutlineMail size={30} />
          Mail
        </>
      ),
      href: "mailto:harrisharun2003@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          <RiTwitterXLine size={30} />
          Twitter
        </>
      ),
      href: "https://twitter.com/Harrisharun2",
    },
  ];

  return (
    <div className="z-[100] h-screen grid items-center right-0 fixed">
      <div className="hidden lg:flex flex-col">
        <ul>
          {links.map(({ id, child, href, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-10 p-4 my-2 mr-[-90px] hover:ml-[-80px] rounded-full duration-300  border-2 border-blue-500 rounded-r-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <a
                href={href}
                className={`flex justify-between items-center w-full ${
                  darkMode ? "text-white" : "text-black"
                } no-underline`}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
