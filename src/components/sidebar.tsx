import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Sidebar: React.FC = () => {
  return (
    <div
      id="sidebar"
      className="fixed left-10 top-1/2 hidden -translate-y-1/2 transform lg:block"
    >
      <div className="flex flex-col text-xl">
        <button
          className="text-left italic"
          onClick={() => scrollTo("#education")}
        >
          Education
        </button>
        <button
          className="text-left italic"
          onClick={() => scrollTo("#workExperience")}
        >
          Work Experience
        </button>
        <button
          className="text-left italic"
          onClick={() => scrollTo("#skills")}
        >
          Skills
        </button>
        <button
          className="text-left italic"
          onClick={() => scrollTo("#projects")}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
