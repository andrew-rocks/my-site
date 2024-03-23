import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
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
    <div id="top" className="mx-auto max-w-screen-md font-sans">
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
      <Sidebar />
      {/* <nav>
        <ul className="flex list-none pl-0">
          <li className="pr-8">
            <Link to="/" className="text-black">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav> */}
      <main>
        {/* <h1 className="text-rebeccapurple my-4 text-2xl font-semibold">
          {pageTitle}
        </h1> */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
