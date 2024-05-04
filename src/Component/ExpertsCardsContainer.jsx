import React from "react";

const ExpertsCardsContainer = ({ darkMode, experts }) => {
  return (
    <div className="mx-auto w-full px-4 pt-32">
      <h2
        className={`font-bold text-${
          darkMode ? "white" : "[#045CD3]"
        } text- justify-around mb-6`}
      >
        Our Experts
      </h2>
      <div className="py-10 grid grid-cols-1 md:px-16 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-4">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="expert_card w-[300px] h-fit p-4 flex flex-col items-center"
          >
            <div className="relative grid items-center justify-around w-[200px] h-[200px]">
              <div className="expert_card_circle rounded-full h-[200px] w-[200px] border-5 border-[#045CD3] absolute shadow-lg" />
              <div className="expert_card_img_circle rounded-full h-[200px] w-[200px] border-5 opacity-80 border-[#045CD3] absolute shadow-lg transition-transform ease-in-out duration-300" />
              <img
                src={expert.image}
                alt={expert.name}
                className="expert_card_img rounded-full h-[150px] w-[150px] object-cover shadow-lg z-[10] transition-transform ease-in-out duration-300"
              />
            </div>
            <div className="text-center mt-5">
              <h5 className="font-semibold">{expert.name}</h5>
              <div className="mt-3 text-sm font-bold text-[#045CD3]">
                {expert.position}
              </div>
              <div className="expert_card_desc text-gray-500 mt-2 ease-in-out duration-300">
                {expert.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsCardsContainer;
