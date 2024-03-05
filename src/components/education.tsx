import * as React from "react";
import TitleList from "./common/titleList";
import CardWrapper from "./common/cardWrapper";
import TitleIcon from "./common/titleIcon";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

type EducationProps = {
  school: string;
  description: string;
  gpa: string;
  honors: string[] | null;
  relevantCourses: string[];
  advancedCourses: string[];
};

const Education = ({
  school,
  description,
  gpa,
  honors,
  relevantCourses,
  advancedCourses,
}: EducationProps) => {
  const data = useStaticQuery(graphql`
    query {
      educationImage: file(relativePath: { eq: "education/notre-dame.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 60, height: 60)
        }
      }
    }
  `);

  // const educationImageNode = data.educationImage;

  // if (!educationImageNode) {
  //   console.error(`Image with filename education/notre-dame.jpg not found`);
  //   return null;
  // }

  const educationImage = getImage(data.educationImage) ?? null;

  return (
    <CardWrapper>
      {educationImage && (
        <TitleIcon
          title={school}
          subtitle={`GPA: ${gpa}`}
          date={"2018 - 2022"}
          image={educationImage}
          link="https://cse.nd.edu"
        />
      )}
      {honors && <TitleList title="Honors" list={honors} emphasis />}
      <p className="pt-2">{description}</p>
      <TitleList title="Relevant Coursework" list={relevantCourses} />
      <TitleList title="Advanced Coursework" list={advancedCourses} />
    </CardWrapper>
  );
};

export default Education;
