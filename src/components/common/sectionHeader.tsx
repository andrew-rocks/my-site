import React from "react";

type SectionHeaderProps = {
  name: string;
};

const SectionHeader = ({ name }: SectionHeaderProps) => {
  return (
    <h1 className="mb-2 pl-2 text-2xl font-bold text-rebeccapurple">{name}</h1>
  );
};

export default SectionHeader;
