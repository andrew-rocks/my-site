import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div id="logo" className=" fixed left-10 hidden lg:block">
        <button id="header-icon" onClick={() => scrollTo("#top")}>
          <StaticImage
            height={70}
            width={70}
            src="../images/favicon_portfolio/android-chrome-192x192.png"
            alt="Portfolio logo"
          />
        </button>
      </div>
      <div className="my-6 text-5xl font-bold text-gray-400">
        {data.site.siteMetadata.title}
      </div>
    </header>
  );
};

export default Header;
