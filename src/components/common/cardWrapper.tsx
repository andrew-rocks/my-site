import React from "react";
import Atropos from "atropos/react";

interface CardWrapperProps {
  flex?: boolean;
  children: React.ReactNode;
}

const CardWrapper = ({ flex, children }: CardWrapperProps) => {
  const className = flex
    ? "flex mb-8 rounded-md border-2 p-5 shadow-sm"
    : "mb-8 rounded-md border-2 p-5 shadow-sm";
  return (
    <Atropos>
      <div className={className}>{children}</div>
    </Atropos>
  );
};

export default CardWrapper;
