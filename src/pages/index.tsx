import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import { Card } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"My Portfolio Website"}>
      <p>Coming soon...</p>

      <Hero
        title="Hi, I'm Andrew Rocks"
        intro="I am a Software Engineer based out of Chicago. I am a generalist who loves building and learning new things."
      />
      <Card variant="outlined" sx={{ p: 2, my: 2 }}>
        Education card will go here
      </Card>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
