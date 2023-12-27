import * as React from "react";
import CardWrapper from "./common/cardWrapper";

type WorkExperienceProps = {
  company: string;
  title: string;
  dates: string;
  description: readonly (string | null)[];
};

const WorkExperience = ({
  company,
  title,
  dates,
  description,
}: WorkExperienceProps) => {
  return (
    <CardWrapper title={company} subtitle={title} date={dates}>
      <ul className="list-disc pl-6 pt-1">
        {description.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default WorkExperience;
