import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import { buttonTheme } from "../../themes/buttonTheme";

const ContactMeButton: React.FC = () => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <div className="-mt-4 mb-4">
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            (window.location.href = "mailto:andrew.rocks222@gmail.com")
          }
        >
          Contact Me
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default ContactMeButton;
