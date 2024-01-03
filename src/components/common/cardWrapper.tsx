import React from "react";
import Atropos from "atropos/react";

interface CardWrapperProps {
  children: React.ReactNode;
}

const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <Atropos>
      <div className="mb-8 rounded-md border-2 p-5 shadow-sm">{children}</div>
    </Atropos>
  );
};

export default CardWrapper;
