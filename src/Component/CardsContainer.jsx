import React from "react";

const CardsContainer = ({ darkMode, title, cards }) => {
  return (
    <div className="mx-auto w-full pt-32 px-4">
      <h2
        className={`font-bold text-${
          darkMode ? "white" : "[#045CD3]"
        } text-center mb-6`}
      >
        {title}
      </h2>
      <div
        className={`grid grid-cols-2 md:px-16 place-items-center md:grid-cols-4 gap-4 mt-10`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-compact rounded-md max-w-full overflow-hidden shadow-${
              darkMode ? "md bg-gray-800" : "lg bg-transparent"
            } shadow-[#202020] transform transition-transform duration-300 hover:scale-105`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[100px] md:h-[150px] lg:h-[250px] object-cover"
            />
            <div
              className={`card-body px-3 text-${
                darkMode ? "white bg-gray-800" : "black"
              } text-left gap-0`}
            >
              <h5>{card.title}</h5>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
