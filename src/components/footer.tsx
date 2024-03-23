import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Footer: React.FC = () => {
  return (
    <footer>
      <button
        className=" mb-10 text-lg font-medium italic text-rebeccapurple hover:font-semibold"
        onClick={() => scrollTo("#top")}
      >
        <u>Scroll to top ↑</u>
      </button>
    </footer>
  );
};

export default Footer;
