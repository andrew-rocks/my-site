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
      allProjectsJson {
        nodes {
          id
          title
          description
          utilized
          repoLink
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
      mySite: file(relativePath: { eq: "projects/my-site/my-site.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 300, height: 220)
        }
      }
      swipeAndSwing: file(
        relativePath: { eq: "projects/swipe-and-swing/swipe-and-swing.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 160, height: 320)
        }
      }
      droid: file(relativePath: { eq: "projects/tank-droid/tank-droid.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 250, height: 250)
        }
      }
      pdfScraper: file(
        relativePath: { eq: "projects/pdf-scraper/pdf-scraper.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 200, height: 200)
        }
      }
      laneDetection: file(
        relativePath: { eq: "projects/lane-detection/lane-detection.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 200, height: 200)
        }
      }
    }
  `);
  const workExperiences = data.allWorkExperiencesJson.nodes;
  const projects = data.allProjectsJson.nodes;

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
    <Layout>
      <Hero
        title="Hi &#x1F44B; I'm Andrew Rocks"
        intro="I am a Software Engineer based out of Chicago. I am a generalist who loves building and learning new things."
      />
      <SectionHeader id="education" name="Education &#x1F4DA;" />
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
      <SectionHeader id="workExperience" name="Work Experience &#x1F3E2;" />
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
      <SectionHeader id="skills" name="Skills &#x1F4AA;" />
      <Skills />
      <SectionHeader id="projects" name="Projects 🔨" />
      <Project
        title={projects[0].title}
        description={projects[0].description}
        utilized={projects[0].utilized}
        image={getImage(data.mySite) ?? null}
        repoLink={projects[0].repoLink}
      />
      <Project
        title={projects[1].title}
        description={projects[1].description}
        utilized={projects[1].utilized}
        image={getImage(data.swipeAndSwing) ?? null}
        // repoLink={projects[1].repoLink}
      />
      <Project
        title={projects[2].title}
        description={projects[2].description}
        utilized={projects[2].utilized}
        image={getImage(data.droid) ?? null}
        repoLink={projects[2].repoLink}
        // todo: move links to json file
        mediaLinks={[
          "https://www.youtube.com/embed/A_-2YSV1a8Y",
          "https://www.youtube.com/embed/WbfEbOObnso",
        ]}
      />
      <Project
        title={projects[3].title}
        description={projects[3].description}
        utilized={projects[3].utilized}
        image={getImage(data.pdfScraper) ?? null}
        repoLink={projects[3].repoLink}
      />
      <Project
        title={projects[4].title}
        description={projects[4].description}
        utilized={projects[4].utilized}
        image={getImage(data.laneDetection) ?? null}
        repoLink={projects[4].repoLink}
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
