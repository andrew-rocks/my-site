import React from "react";
import BaseButton from "./buttons/baseButton";
import scrollTo from "gatsby-plugin-smoothscroll";

const HeroButtons: React.FC = () => {
  const handleViewResumeClick = () => {
    window.open("Andrew_Rocks_resume_2024.pdf", "_blank");
  };

  const handleContactMeClick = () =>
    (window.location.href = "mailto:andrew.rocks222@gmail.com");

  const handleViewProjectsClick = () => scrollTo("#projects");

  return (
    <div className="mb-4 flex flex-row space-x-2">
      <BaseButton text="View Resume" onClick={handleViewResumeClick} />
      <BaseButton text="View Projects" onClick={handleViewProjectsClick} />
      <BaseButton text="Contact Me" onClick={handleContactMeClick} />
    </div>
  );
};

export default HeroButtons;
