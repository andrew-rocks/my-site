import * as React from "react";

type TitleListProps = {
  title: string;
  list: string[];
  emphasis?: boolean;
};

const TitleList = ({ title, list, emphasis }: TitleListProps) => {
  return (
    <p className="pb-2">
      <strong>{title}:</strong>
      <br />
      {emphasis ? <em>{list.join(", ")}</em> : list.join(", ")}
    </p>
  );
};

export default TitleList;

TitleList.defaultProps = {
  emphasis: false,
};
