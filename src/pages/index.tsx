import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Education from "../components/education";
import SectionHeader from "../components/common/sectionHeader";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"My Portfolio Website"}>
      <Hero
        title="Hi &#x1F44B; I'm Andrew Rocks"
        intro="I am a Software Engineer based out of Chicago. I am a generalist who loves building and learning new things."
      />
      <SectionHeader name="Education &#x1F4DA;" />
      <Education
        school="University of Notre Dame"
        description="I received a Bachelor's degree in Computer Science with a minor in Engineering Corporate Practice."
        gpa="3.92"
        honors={[
          "Magna Cum Laude",
          "Tau Beta Pi Engineering Honor Society",
          "Upsilon Pi Epsilon Computing Honor Society",
        ]}
        relevantCourses={[
          "Data Structures",
          "Design/Analysis of Algorithms",
          "Programming Paradigms",
          "Systems Programming",
          "Operating Systems Principles",
        ]}
        advancedCourses={[
          "Droid Building",
          "Computer Vision",
          "Cryptography",
          "Advanced Database Projects",
        ]}
      />
      {/* <SectionHeader name="Work Experience" />
      <SectionHeader name="Skills" />
      <SectionHeader name="Projects" /> */}
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
