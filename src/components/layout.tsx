import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Sidebar from "./sidebar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
      <header className="my-6 text-5xl font-bold text-gray-400">
        {data.site.siteMetadata.title}
      </header>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
