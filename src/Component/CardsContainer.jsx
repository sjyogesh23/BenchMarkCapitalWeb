import React, { useState } from "react";
import { XCircle } from "react-bootstrap-icons";

const CardsContainer = ({ darkMode, InvesterData }) => {
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
        {InvesterData.title}
      </h2>
      <div
        className={`grid grid-cols-2 md:px-16 place-items-center md:grid-cols-4 gap-4 mt-10`}
      >
        {InvesterData.cards.map((card, index) =>
          card.popup_list ? (
            <div
              key={index}
              onClick={() => openPopup(card.popup_list)}
              className="w-full cursor-pointer"
            >
              <div
                className={`card-compact rounded-md max-w-full overflow-hidden shadow-${
                  darkMode ? "md bg-gray-800" : "lg bg-transparent"
                } shadow-[#202020] transform transition-transform duration-300 hover:scale-105`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[100px] md:h-[150px] lg:h-[250px] object-cover"
                />

                {(card.title || card.description) && (
                  <div
                    className={`card-body px-3 text-${
                      darkMode ? "white bg-gray-800" : "black"
                    } text-left gap-0`}
                  >
                    <h5>{card.title}</h5>
                    {card.description && (
                      <p className="text-sm">{card.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <a
              href={card.linkto}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="w-full no-underline"
            >
              <div
                className={`card-compact rounded-md max-w-full overflow-hidden shadow-${
                  darkMode ? "md bg-gray-800" : "lg bg-transparent"
                } shadow-[#202020] transform transition-transform duration-300 hover:scale-105`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[100px] md:h-[150px] lg:h-[250px] object-cover"
                />

                {(card.title || card.description) && (
                  <div
                    className={`card-body px-3 text-${
                      darkMode ? "white bg-gray-800" : "black"
                    } text-left gap-0`}
                  >
                    <h5>{card.title}</h5>
                    {card.description && (
                      <p className="text-sm">{card.description}</p>
                    )}
                  </div>
                )}
              </div>
            </a>
          )
        )}
      </div>

      {isOpen && popupData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 popup-overlay"
          onClick={handleOutsideClick}
        >
          <div
            className={`relative rounded-lg px-4 py-4 mx-4 max-h-[70vh] w-[90vh] ${
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

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-y-auto overflow-x-hidden max-h-[49vh]">
              {popupData.points.map((point, index) => (
                <a
                  key={index}
                  href={point.linkto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline w-full h-[100px] md:h-[150px] lg:h-[150px] transform transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="card-compact w-full h-full rounded-md bg-transparent">
                    <img
                      src={point.image}
                      alt={`Point ${point.id}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
