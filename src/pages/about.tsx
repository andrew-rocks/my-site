// Step 1: Import React
import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I&apos;m the proud creator of this site, which I built with
        Gatsby.
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="About Me" />;

// Step 3: Export your component
export default AboutPage;
