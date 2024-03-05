import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

interface TitleIconProps {
  title: string;
  subtitle: string;
  date: string;
  image: IGatsbyImageData | null;
  link: string;
}

const TitleIcon = ({ title, subtitle, date, image, link }: TitleIconProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex-auto">
        <div className="flex justify-between text-lg font-semibold">
          <h2 className="text-xl">{title}</h2>
          <h2 className="pr-2">{date}</h2>
        </div>
        <h6 className="text-lg italic">{subtitle}</h6>
      </div>
      {/* TODO: removing this icon div for now, replace with GatsbyImage to make images dynamic */}
      <div data-atropos-offset="10">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="overflow-hidden rounded-md  ">
            {image && <GatsbyImage image={image} alt={`${title} - icon`} />}
          </div>
        </a>
      </div>
    </div>
  );
};

export default TitleIcon;
