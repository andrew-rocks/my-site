import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface TitleIconProps {
  title: string;
  subtitle: string;
  date: string;
}

const TitleIcon = ({ title, subtitle, date }: TitleIconProps) => {
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
      {/* <div data-atropos-offset="10">
        <a href="https://cse.nd.edu/" target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../images/notre-dame-logo.png"
            alt="University of Notre Dame logo"
            height={70}
            width={70}
          />
        </a>
      </div> */}
    </div>
  );
};

export default TitleIcon;
