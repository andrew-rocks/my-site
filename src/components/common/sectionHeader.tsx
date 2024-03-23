import React from "react";

type SectionHeaderProps = {
  id: string;
  name: string;
};

const SectionHeader = ({ id, name }: SectionHeaderProps) => {
  return (
    <h1 id={id} className="mb-2 pl-2 text-2xl font-bold text-rebeccapurple">
      {name}
    </h1>
  );
};

export default SectionHeader;
