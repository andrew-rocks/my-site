import React from "react";
import CardWrapper from "./common/cardWrapper";

const Skills = () => {
  return (
    <CardWrapper>
      <h1 className="text-xl font-semibold">Languages</h1>
      <p className="pb-3">
        Typescript, Javascript, C#, Python, Java, C++, C, HTML, CSS
      </p>
      <h1 className="text-xl font-semibold">Technologies</h1>
      <p className="pb-3">
        React, .NET, AWS, Angular, Spring Boot, SQL (multiple versions),
        GraphQL, Tailwind CSS, MongoDB
      </p>
      <h1 className="text-xl font-semibold">Other</h1>
      <p>
        API design, Object-Oriented Programming, Component-based UI design, UX
        design, Agile
      </p>
    </CardWrapper>
  );
};

export default Skills;
