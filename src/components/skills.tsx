import React from "react";
import CardWrapper from "./common/cardWrapper";

const Skills = () => {
  return (
    <CardWrapper>
      <h1 className="text-xl font-semibold">Languages</h1>
      <p className="pb-3">
        TypeScript, JavaScript, C#, Python, Java, C, C++, HTML, CSS
      </p>
      <h1 className="text-xl font-semibold">Technologies</h1>
      <p className="pb-3">
        React, .NET, Angular, GraphQL, SQL, AWS, Next.js, Spring Boot, Flask,
        Gatsby, Tailwind CSS, MongoDB, Material UI
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
