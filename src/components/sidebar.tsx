import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Sidebar: React.FC = () => {
  const sidebarLinkStyling =
    "text-left italic text-rebeccapurple font-medium hover:font-extrabold hover:underline mb-1";

  return (
    <div
      id="sidebar"
      className="fixed left-10 top-1/2 hidden -translate-y-1/2 transform lg:block"
    >
      <div className="flex flex-col text-2xl">
        <button className={sidebarLinkStyling} onClick={() => scrollTo("#top")}>
          Home
        </button>
        <button
          className={sidebarLinkStyling}
          onClick={() => scrollTo("#education")}
        >
          Education
        </button>
        <button
          className={sidebarLinkStyling}
          onClick={() => scrollTo("#workExperience")}
        >
          Work Experience
        </button>
        <button
          className={sidebarLinkStyling}
          onClick={() => scrollTo("#skills")}
        >
          Skills
        </button>
        <button
          className={sidebarLinkStyling}
          onClick={() => scrollTo("#projects")}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
