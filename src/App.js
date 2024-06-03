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
import Service from "./Component/Service";

const ServiceData = {
  title: "Our Service",
  cards: [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      title: "Life Insurance",
      popup_list: {
        title: "Life Insurance",
        points: [
          "Life insurance is a financial contract between an individual and an insurance company. In exchange for regular premium payments, the insurance company agrees to provide a sum of money, known as the death benefit, to the designated beneficiaries upon the insured person's death. This payout is intended to provide financial protection and support to the beneficiaries, such as family members or dependents, in the event of the insured's death.",
          "Life insurance serves several purposes, including:",
          "Income Replacement: It can replace the income of the insured person, ensuring that their dependents have financial support to maintain their standard of living after the insured's death.",
          "Debt Repayment: It can be used to pay off outstanding debts, such as a mortgage, car loans, or credit card debt, so that these financial obligations do not burden the surviving family members.",
          "Funeral and Final Expenses: Life insurance can cover funeral expenses and other end-of-life costs, relieving the financial burden on the family during a difficult time.",
          "Estate Planning: Life insurance proceeds can be used to provide an inheritance, equalize inheritances among heirs, or pay estate taxes, helping to preserve the insured person's legacy.",
          "There are different types of life insurance policies, including term life insurance, whole life insurance, universal life insurance, and variable life insurance, each offering varying features, benefits, and premium structures. The choice of policy depends on individual needs, financial goals, and preferences.",
        ],
      },
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      popup_list: {
        title: "List",
        points: ["ABC", "ABC", "ABC", "ABC"],
      },
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

const row1 = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
];

const row2 = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
];

const InvesterData = {
  title: "Invester Corner",
  cards: [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      title: "Calculator",
      linkto: "https://www.youtube.com",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      title: "Mutual Fund",
      linkto: "https://www.youtube.com",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      title: "Another",
      popup_list: {
        title: "List",
        points: [
          {
            id: 1,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 2,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 3,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 4,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 5,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 6,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 7,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 8,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 9,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
          {
            id: 10,
            image:
              "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            linkto: "https://www.youtube.com",
          },
        ],
      },
    },
  ],
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
      <SocialLinks darkMode={darkMode} />

      <NavigationBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        sections={[
          { title: "Home", href_link: "#Home" },
          {
            title: "Our Service",
            href_link: "#Service",
          },
          { title: "Invester Corner", href_link: "#Invester" },
          { title: "Experts", href_link: "#Experts" },
          { title: "Partners", href_link: "#Partners" },
          { title: "Contact", href_link: "#Contact" },
        ]}
      />
      <div id="Home" className="min-h-screen" smooth>
        <Home darkMode={darkMode} />
      </div>

      <div id="About" smooth>
        <AboutUS darkMode={darkMode} />
      </div>

      <div id="Service" smooth>
        <Service darkMode={darkMode} ServiceData={ServiceData} />
      </div>

      <div id="Invester" smooth>
        <CardsContainer darkMode={darkMode} InvesterData={InvesterData} />
      </div>

      <div id="Experts" smooth>
        <ExpertsCardsContainer darkMode={darkMode} experts={expertsData} />
      </div>

      <div id="Partners" smooth>
        <Partners darkMode={darkMode} row1={row1} row2={row2} />
      </div>

      <div id="Contact" smooth>
        <DataInputContainer darkMode={darkMode} />
      </div>

      <Footer data={footerData} />
    </div>
  );
};

export default App;
