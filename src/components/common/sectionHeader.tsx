import React from "react";

type SectionHeaderProps = {
  name: string;
};

const SectionHeader = ({ name }: SectionHeaderProps) => {
  return (
    <h1 className="text-rebeccapurple mb-2 pl-2 text-2xl font-bold">{name}</h1>
  );
};

export default SectionHeader;
