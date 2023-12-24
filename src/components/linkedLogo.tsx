import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

type LinkedLogoProps = {
  link: string;
  src: string;
  alt: string;
};

const LinkedLogo = ({ link, src, alt }: LinkedLogoProps) => {
  return (
    <div data-atropos-offset="-20">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {/* todo: implement this component for repetitive card components <GatsbyImage src={src} alt={alt} height={70} width={70} /> */}
      </a>
    </div>
  );
};

export default LinkedLogo;
