import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import { buttonTheme } from "../../themes/buttonTheme";

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
    <ThemeProvider theme={buttonTheme}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};
export default LinkButton;
