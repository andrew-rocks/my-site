import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import TitleList from "./common/TitleList";
import CardWrapper from "./common/cardWrapper";

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
  return (
    <CardWrapper title={school} subtitle={`GPA: ${gpa}`} date="2018 - 2022">
      {honors && <TitleList title="Honors" list={honors} emphasis />}
      <p className="pb-2">{description}</p>
      <TitleList title="Relevant Coursework" list={relevantCourses} />
      <TitleList title="Advanced Coursework" list={advancedCourses} />
    </CardWrapper>
  );
};

export default Education;
