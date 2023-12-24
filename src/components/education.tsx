import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Atropos from "atropos/react";

type EducationProps = {
  school: string;
  description: string;
  gpa: string;
  honors: string[] | null;
  relevantCourses: string[];
};

const Education = ({
  school,
  description,
  gpa,
  honors,
  relevantCourses,
}: EducationProps) => {
  return (
    <Atropos>
      <div className="mb-8 rounded-md border-2 p-2 pb-4 pl-4 shadow-sm">
        <div className="flex justify-between">
          <div className="flex-auto pr-2 pt-2">
            <div className="flex justify-between text-lg font-semibold">
              <h2 className="text-xl">{school}</h2>
              <h2>2018 - 2022</h2>
            </div>
            <h6>GPA: {gpa}</h6>
          </div>
          <div data-atropos-offset="-14">
            <a
              href="https://cse.nd.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src="../images/notre-dame-logo.png"
                alt="University of Notre Dame logo"
                height={70}
                width={70}
              />
            </a>
          </div>
        </div>
        <p className="pb-2">
          <strong>Honors:</strong>
          <br />
          <em>{honors && honors.join(", ")}</em>
        </p>
        <p className="pb-2">{description}</p>
        <p className="pb-2">
          <strong>Relevant Coursework:</strong>
          <br />
          {relevantCourses.join(", ")}
        </p>
        <p>
          <strong>Advanced Coursework:</strong>
          <br />
          Droid Building, Computer Vision, Cryptography, Advanced Database
          Projects
        </p>
      </div>
    </Atropos>
  );
};

export default Education;
