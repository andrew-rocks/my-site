import * as React from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Education from "../components/education";
import SectionHeader from "../components/common/sectionHeader";
import WorkExperience from "../components/workExperience";
import Skills from "../components/skills";
import { IGatsbyImageData, getImage } from "gatsby-plugin-image";
import Project from "../components/project";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
          gatsbyImageData(layout: CONSTRAINED, width: 60, height: 60)
        }
      }
      deloitte: file(relativePath: { eq: "workExperiences/deloitte.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 60, height: 60)
        }
      }
      dicksSportingGoods: file(
        relativePath: { eq: "workExperiences/dicks-sporting-goods.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 60, height: 60)
        }
      }
    }
  `);
  const workExperiences = data.allWorkExperiencesJson.nodes;

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
        description="I earned a Bachelor's degree in Computer Science with a minor in Engineering Corporate Practice."
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
      {/* {workExperiences.map(
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
      )} */}
      {/* TODO: make this a map from an array */}
      <WorkExperience
        key={workExperiences[0].id}
        company={workExperiences[0].company}
        title={workExperiences[0].title}
        dates={workExperiences[0].dates}
        description={workExperiences[0].description}
        utilized={workExperiences[0].utilized}
        image={getImage(data.pariveda) ?? null}
        link={workExperiences[0].link}
      />
      <WorkExperience
        key={workExperiences[1].id}
        company={workExperiences[1].company}
        title={workExperiences[1].title}
        dates={workExperiences[1].dates}
        description={workExperiences[1].description}
        utilized={workExperiences[1].utilized}
        image={getImage(data.deloitte) ?? null}
        link={workExperiences[1].link}
      />
      <WorkExperience
        key={workExperiences[2].id}
        company={workExperiences[2].company}
        title={workExperiences[2].title}
        dates={workExperiences[2].dates}
        description={workExperiences[2].description}
        utilized={workExperiences[2].utilized}
        image={getImage(data.dicksSportingGoods) ?? null}
        link={workExperiences[2].link}
      />
      <SectionHeader name="Skills &#x1F4AA;" />
      <Skills />
      <SectionHeader name="Projects" />
      <Project />
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
