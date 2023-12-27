import React from "react";
import Atropos from "atropos/react";
import { StaticImage } from "gatsby-plugin-image";

interface CardWrapperProps {
  title: string;
  subtitle: string;
  date: string;
  children: React.ReactNode;
}

const CardWrapper = ({ title, subtitle, date, children }: CardWrapperProps) => {
  return (
    <Atropos>
      <div className="mb-8 rounded-md border-2 p-2 pb-4 pl-4 shadow-sm">
        <div className="flex justify-between">
          <div className="flex-auto pr-2 pt-2">
            <div className="flex justify-between text-lg font-semibold">
              <h2 className="text-xl">{title}</h2>
              <h2>{date}</h2>
            </div>
            <h6>{subtitle}</h6>
          </div>
          <div data-atropos-offset="10">
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
        {children}
      </div>
    </Atropos>
  );
};

export default CardWrapper;
