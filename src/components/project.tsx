import React from "react";
import CardWrapper from "./common/cardWrapper";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type ProjectProps = {
  title: string;
  description: string;
  repoLink?: string;
  image: IGatsbyImageData | null;
};

const Project = ({ title, description, repoLink, image }: ProjectProps) => {
  return (
    <CardWrapper>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="pb-3">{description}</p>
      {image && (
        <GatsbyImage
          className="overflow-hidden rounded-xl"
          image={image}
          alt={`${title} - image`}
        />
      )}
      {repoLink && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="pb-3"
        >
          {repoLink}
        </a>
      )}
    </CardWrapper>
  );
};

export default Project;
