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
      <section className="mb-10" data-atropos-offset="-6">
        <div className="flex rounded-md border-2 border-violet-300 bg-violet-100 p-4 shadow-lg hover:bg-violet-200">
          <StaticImage
            className=" mr-2 rounded-lg"
            alt="Professional headshot of Andrew Rocks, wearing navy suit and green tie"
            src="../images/headshot.jpeg"
            width={300}
            height={300}
          />
          <div
            className="flex flex-col justify-center px-4 text-center"
            data-atropos-offset="-6"
          >
            <h1 className="text-3xl font-bold text-rebeccapurple">{title}</h1>
            <p className="mt-2">{intro}</p>
          </div>
        </div>
      </section>
    </Atropos>
  );
};

export default Hero;
