import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

type EducationProps = {
  school: string;
  description: string;
  gpa: string;
};

const Education = ({ school, description, gpa }: EducationProps) => {
  return (
    <div className="mb-8 rounded-md border-2 p-2 shadow-sm">
      <div className="flex justify-between">
        <div className="pl-2 pt-2">
          <h2 className="text-lg font-semibold">{school}</h2>
          <h6>GPA: {gpa}</h6>
        </div>
        <StaticImage
          src="../images/notre-dame-logo.png"
          alt="University of Notre Dame logo"
          height={70}
          width={70}
        />
      </div>
      <p className="p-2">{description}</p>
    </div>
  );
};

export default Education;
