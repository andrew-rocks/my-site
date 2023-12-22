import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

type HeroProps = {
  title: string;
  intro: string;
};

const Hero = ({ title, intro }: HeroProps) => {
  return (
    <section className="mb-16">
      <div className="flex rounded-md border-2 p-4 shadow-lg">
        <StaticImage
          className="mr-2 rounded-lg"
          alt="Professional headshot of Andrew Rocks, wearing navy suit and green tie"
          src="../images/headshot.jpeg"
          width={300}
          height={300}
        />
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-rebeccapurple text-3xl font-bold">{title}</h1>
          <p className="mt-2">{intro}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
