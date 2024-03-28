import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Atropos from "atropos/react";

type HeroProps = {
  title: string;
  intro: string;
};

const Hero = ({ title, intro }: HeroProps) => {
  return (
    <Atropos>
      <section className="mb-6" data-atropos-offset="-6">
        <div className="flex rounded-md border-4 border-violet-400 bg-violet-200 p-4 shadow-lg hover:bg-violet-300">
          <StaticImage
            className=" mr-2 rounded-full"
            alt="Professional headshot of Andrew Rocks, wearing navy suit and green tie"
            src="../images/headshot.jpeg"
            width={600}
            height={600}
          />
          <div
            className="flex flex-col justify-center px-4 text-center"
            data-atropos-offset="-6"
          >
            <h1 className="text-4xl font-bold text-rebeccapurple">{title}</h1>
            <p className="mt-2 font-medium">{intro}</p>
          </div>
        </div>
      </section>
    </Atropos>
  );
};

export default Hero;
