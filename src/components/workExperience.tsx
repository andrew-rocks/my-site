import * as React from "react";
import CardWrapper from "./common/cardWrapper";
import TitleList from "./common/titleWithList";
import TitleIcon from "./common/titleIcon";

type WorkExperienceProps = {
  company: string;
  title: string;
  dates: string;
  description: readonly (string | null)[];
  utilized: readonly (string | null)[] | null;
};

const WorkExperience = ({
  company,
  title,
  dates,
  description,
  utilized,
}: WorkExperienceProps) => {
  return (
    <CardWrapper>
      <TitleIcon title={company} subtitle={title} date={dates} />
      <ul className="list-disc pl-4 pt-1">
        {description.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {utilized && (
        <TitleList
          title="Utilized"
          list={utilized.filter((item): item is string => item !== null)}
          emphasis
        />
      )}
    </CardWrapper>
  );
};

export default WorkExperience;
