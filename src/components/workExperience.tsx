import * as React from "react";
import CardWrapper from "./common/cardWrapper";
import TitleList from "./common/titleList";
import TitleIcon from "./common/titleIcon";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

type WorkExperienceProps = {
  company: string;
  title: string;
  dates: string;
  description: readonly (string | null)[];
  utilized: readonly (string | null)[] | null;
  image: IGatsbyImageData | null;
  link: string;
};

const WorkExperience = ({
  company,
  title,
  dates,
  description,
  utilized,
  image,
  link,
}: WorkExperienceProps) => {
  return (
    <CardWrapper>
      <TitleIcon
        title={company}
        subtitle={title}
        date={dates}
        image={image}
        link={link}
      />
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
