import React, { useState } from "react";
import { XCircle } from "react-bootstrap-icons";

const Service = ({ darkMode, ServiceData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const openPopup = (data) => {
    setPopupData(data);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupData(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  return (
    <div className="mx-auto w-full py-32 px-4">
      <h2
        className={`font-bold text-${
          darkMode ? "white" : "[#045CD3]"
        } text-center mb-6`}
      >
        {ServiceData.title}
      </h2>
      <div
        className={`grid grid-cols-2 md:px-16 place-items-center md:grid-cols-4 gap-4 mt-10`}
      >
        {ServiceData.cards.map((card, index) => (
          <div
            key={index}
            onClick={() => openPopup(card.popup_list)}
            className={`card-compact rounded-md max-w-full overflow-hidden shadow-${
              darkMode ? "md bg-gray-800" : "lg bg-transparent"
            } shadow-[#202020] transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
          >
            <img
              src={card.image}
              alt={card.id}
              className="w-full h-[100px] md:h-[150px] lg:h-[250px] object-cover"
            />
          </div>
        ))}
      </div>
      {isOpen && popupData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 popup-overlay"
          onClick={handleOutsideClick}
        >
          <div
            className={`relative rounded-lg px-8 py-4 max-h-[70vh] mx-10 w-[70vh] ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <div>
              <XCircle
                className="right-8 text-2xl cursor-pointer absolute"
                onClick={closePopup}
              />
              <h3
                className={`font-bold text-${
                  darkMode ? "white" : "[#045CD3]"
                } text-center mb-4`}
              >
                {popupData.title}
              </h3>
            </div>

            <ul className="list-none pl-5 overflow-y-auto max-h-[50vh]">
              {popupData.points.map((point, index) => (
                <li key={index} className="mb-2 text-left">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
