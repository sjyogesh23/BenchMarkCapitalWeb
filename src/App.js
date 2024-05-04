import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./Component/Navigationbar";
import Home from "./Component/Home";
import AboutUS from "./Component/AboutUS";
import CardsContainer from "./Component/CardsContainer";
import DataInputContainer from "./Component/DataInputContainer";
import ExpertsCardsContainer from "./Component/ExpertsCardsContainer";
import Footer from "./Component/Footer";
import Partners from "./Component/Partners";
import SocialLinks from "./Component/SocialLinks";

const ServiceData = {
  header: "Our Service",
  cards: [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      title: "Life hack",
      description: "How to park your car at your garage?",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      title: "Life hack",
      description: "How to park your car at your garage?",
    },
  ],
};

const InvesterData = {
  header: "Invester Corner",
  cards: [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      title: "Life hack",
      description: "How to park your car at your garage?",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      title: "Life hack",
      description: "How to park your car at your garage?",
    },
  ],
};

const expertsData = [
  {
    name: "Yogesh SJ",
    position: "CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Yogesh SJ",
    position: "CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Yogesh SJ",
    position: "CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Yogesh SJ",
    position: "CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Yogesh SJ",
    position: "CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
];

const footerData = {
  title: "Bench Mark Capital",
  contactNumber: "+1234567890",
  mailId: "info@example.com",
  location: "Your Location",
};

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "dark-mode" : "light-mode"
      } min-h-screen text-center`}
    >
      <SocialLinks />
      <NavigationBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        sections={[
          { title: "Home", href_link: "#home" },
          {
            title: "About",
            href_link: "#About",
          },
          { title: "Highlights", href_link: "#highlights" },
          { title: "Pricing", href_link: "#pricing" },
          { title: "FAQ", href_link: "#faq" },
        ]}
      />
      <div id="home" className="min-h-screen" smooth>
        <Home darkMode={darkMode} />
      </div>
      <div id="About" className="min-h-screen" smooth>
        <AboutUS darkMode={darkMode} />
      </div>
      <div id="About" smooth>
        <CardsContainer
          darkMode={darkMode}
          title={ServiceData.header}
          cards={ServiceData.cards}
        />
      </div>
      <div id="Investor" smooth>
        <CardsContainer
          darkMode={darkMode}
          title={InvesterData.header}
          cards={InvesterData.cards}
        />
      </div>

      <div id="Investor" smooth>
        <DataInputContainer darkMode={darkMode} />
      </div>

      <div id="Experts" smooth>
        <ExpertsCardsContainer darkMode={darkMode} experts={expertsData} />
      </div>

      <div id="Experts" smooth>
        <Partners darkMode={darkMode} />
      </div>

      <Footer data={footerData} />
    </div>
  );
};

export default App;
