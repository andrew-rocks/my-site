import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import Sidebar from "./sidebar";

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
      <header className="my-12 text-5xl font-bold text-gray-400">
        {data.site.siteMetadata.title}
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
      <button className="mb-10" onClick={() => scrollTo("#top")}>
        <u>Scroll to top ↑</u>
      </button>
    </div>
  );
};

export default Layout;
