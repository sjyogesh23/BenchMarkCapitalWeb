import React from "react";
import { EnvelopeFill, GeoAltFill, PhoneFill } from "react-bootstrap-icons";
import Logo from "./Logo.png";

const Footer = ({ data }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-neutral-content flex flex-col mb-4 ">
          <div className="w-full text-left">
            <img src={Logo} alt="Logo" className="footer-logo h-[10vh] mb-4" />
            <h5>{data.title}</h5>
          </div>
          <div className="w-fit right-0 mb-4 mt-2">
            <div className="contact-info flex items-center mb-2">
              <PhoneFill className="footer-icon mr-2" />
              <span>{data.contactNumber}</span>
            </div>
            <div className="contact-info flex items-center mb-2">
              <EnvelopeFill className="footer-icon mr-2" />
              <span>{data.mailId}</span>
            </div>
            <div className="contact-info flex items-center">
              <GeoAltFill className="footer-icon mr-2" />
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
