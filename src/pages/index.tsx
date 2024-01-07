import * as React from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Education from "../components/education";
import SectionHeader from "../components/common/sectionHeader";
import WorkExperience from "../components/workExperience";
import Skills from "../components/skills";
import { IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const workExperiences = data.allWorkExperiencesJson.nodes;
  const parivedaImage =
    data?.pariveda?.childImageSharp?.gatsbyImageData ?? null;

  // const getImageNodeByFilename = (
  //   data: Queries.IndexPageQuery,
  //   filename: string,
  // ) => {
  //   const workExperiencesImagesNodes = data.allWorkExperiencesImages;
  //   if (!workExperiencesImagesNodes) {
  //     console.error(`Images in workExperiences directory not found`);
  //     return null;
  //   }
  //   return workExperiencesImagesNodes.find((node) => {
  //     // Assuming filenames are unique, you can adjust the condition as needed
  //     return node.childImageSharp.gatsbyImageData.images.fallback.src.includes(
  //       filename,
  //     );
  //   });
  // };

  // const getWorkExperienceImage = (filename: string) => {
  //   const imageNode = workExperiencesImages.nodes.find(
  //     (node: ImageDataLike) =>
  //       node?.childImageSharp?.gatsbyImageData.images.fallback?.src.includes(
  //         filename,
  //       ),
  //   );
  //   return getImage(imageNode);
  // };

  const findImageData = (
    filename: string,
    allFileNodes: {
      readonly childImageSharp: {
        readonly gatsbyImageData: IGatsbyImageData;
      } | null;
    }[],
  ) => {
    const imageNode = allFileNodes.find(
      (node) =>
        node?.childImageSharp?.gatsbyImageData?.images.fallback?.src.includes(
          filename,
        ),
    );

    if (!imageNode) {
      console.error(`Image node not found for filename ${filename}`);
      return null;
    }

    return imageNode?.childImageSharp?.gatsbyImageData;
  };

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
      <SectionHeader name="Work Experience &#x1F3E2;" />
      {workExperiences.map(
        (workExperience) =>
          workExperience.company &&
          workExperience.title &&
          workExperience.dates &&
          workExperience.description &&
          workExperience.filename &&
          workExperience.link && (
            <WorkExperience
              key={workExperience.id}
              company={workExperience.company}
              title={workExperience.title}
              dates={workExperience.dates}
              description={workExperience.description}
              utilized={workExperience.utilized}
              image={getImage(data.pariveda) ?? null}
              link={workExperience.link}
            />
          ),
      )}
      <SectionHeader name="Skills &#x1F4AA;" />
      <Skills />
      {/* <SectionHeader name="Projects" /> */}
    </Layout>
  );
};

export const query = graphql`
  query IndexPage {
    allWorkExperiencesJson {
      nodes {
        id
        company
        title
        dates
        description
        utilized
        filename
        link
      }
    }
    pariveda: file(relativePath: { eq: "workExperiences/pariveda.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 120, height: 120)
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
