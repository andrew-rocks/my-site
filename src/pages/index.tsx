import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Card from "../components/test-card";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"My Portfolio Website"}>
      <p>I&apos;m a Software Engineer.</p>
      <StaticImage
        alt="Professional headshot of Andrew Rocks, wearing navy suit and green tie"
        src="../images/headshot.jpeg"
        width={400}
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

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
