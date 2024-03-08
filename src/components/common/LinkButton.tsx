import { Button } from "@material-ui/core";
import React from "react";

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
    <Button variant="contained" color="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};
export default LinkButton;
