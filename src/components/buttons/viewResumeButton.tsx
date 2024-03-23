import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@material-ui/core";
import { buttonTheme } from "../../themes/buttonTheme";

const ViewResumeButton: React.FC = () => {
  const handleClick = () => {
    window.open("/AndrewRocksResume.pdf", "_blank");
  };

  return (
    <ThemeProvider theme={buttonTheme}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        View Resume
      </Button>
    </ThemeProvider>
  );
};

export default ViewResumeButton;
