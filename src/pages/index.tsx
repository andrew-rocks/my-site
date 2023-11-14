import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Card from "../components/Card";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"Andrew Rocks"}>
      <p>I'm a Software Engineer.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/headshot.jpeg"
      />
      <Card 
        title="University Of Notre Dame"
        subtitle="I went here"
        body="I took classes"
        footer="Insert relevant coursework here"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Andrew Rocks</title>;

export default IndexPage;
