import React, { useState } from "react";
import {
  Person,
  Envelope,
  TelephoneFill,
  ChatDotsFill,
} from "react-bootstrap-icons";

const DataInputContainer = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );
    setIsSubmitDisabled(isAnyFieldEmpty);
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    setIsSubmitDisabled(true);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className={`mx-auto w-full px-4 py-32`}>
      <div className="max-w-md mx-auto">
        <h2
          className={`font-bold text-${
            darkMode ? "white" : "[#045CD3]"
          } text-center mb-6`}
        >
          Contact Us
        </h2>
        <div className="grid grid-cols-1 mt-10 gap-4">
          <div className="flex border items-center rounded-md space-x-4">
            <Person className="input-icon ml-4" size={24} />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className={`w-full p-2 bg-transparent focus:outline-none`}
            />
          </div>
          <div className="flex border items-center rounded-md space-x-4">
            <Envelope className="input-icon ml-4" size={24} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-2 bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex border items-center rounded-md space-x-4">
            <TelephoneFill className="input-icon ml-4" size={24} />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full p-2 bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex border items-center rounded-md space-x-4">
            <ChatDotsFill className="input-icon ml-4" size={24} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="w-full p-2 bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 space-x-4">
            <button
              onClick={handleClear}
              disabled={Object.values(formData).every((value) => value === "")}
              className="py-2 bg-transparent rounded-md border-1 border-red-500 text-red-500 text-xl  no-underline hover:tracking-wide duration-100 font-semibold "
            >
              Clear
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
              className={`py-2  rounded-md text-white text-xl no-underline  duration-100 font-semibold ${
                isSubmitDisabled
                  ? "opacity-50 cursor-not-allowed bg-gray-800"
                  : "bg-[#045CD3] hover:bg-[#024BAF] hover:tracking-wide"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataInputContainer;
