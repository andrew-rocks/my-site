import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"My Portfolio Website"}>
      <Hero
        title="Hi &#x1F44B; I'm Andrew Rocks"
        intro="I am a Software Engineer based out of Chicago. I am a generalist who loves building and learning new things."
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
