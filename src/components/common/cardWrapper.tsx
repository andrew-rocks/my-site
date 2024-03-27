import React from "react";
import Atropos from "atropos/react";

interface CardWrapperProps {
  flex?: boolean;
  children: React.ReactNode;
}

const CardWrapper = ({ flex, children }: CardWrapperProps) => {
  const className = flex
    ? "flex mb-8 rounded-md border-4 p-5 shadow-lg border-gray-300"
    : "mb-8 rounded-md border-4 p-5 shadow-lg border-gray-300";
  return (
    <Atropos>
      <div className={className}>{children}</div>
    </Atropos>
  );
};

export default CardWrapper;
