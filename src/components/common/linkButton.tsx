import React from "react";
import BaseButton from "../buttons/baseButton";

interface LinkButtonProps {
  link?: string;
  openInNewTab?: boolean;
  text: string;
  openDialog?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  openInNewTab,
  text,
  openDialog,
}) => {
  const handleClick = () => {
    if (link) {
      if (openInNewTab) {
        window.open(link, "_blank", "noopener noreferrer");
      } else {
        window.location.href = link;
      }
    } else if (openDialog) {
      openDialog();
    }
  };

  return (
    <>
      <BaseButton text={text} onClick={handleClick} />
    </>
  );
};
export default LinkButton;
