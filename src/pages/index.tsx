import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/headshot.jpeg"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
