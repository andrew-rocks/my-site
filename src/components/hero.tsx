import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "./hero.module.css";
import { Paper } from "@mui/material";

type HeroProps = {
  title: string;
  intro: string;
};

const Hero = ({ title, intro }: HeroProps) => {
  return (
    <Paper
      elevation={3}
      sx={{ flexDirection: "row", bgcolor: "#f0f0f0", p: 2 }}
    >
      <section>
        <div className={styles.container}>
          <StaticImage
            alt="Professional headshot of Andrew Rocks, wearing navy suit and green tie"
            src="../images/headshot.jpeg"
            width={400}
          />
          <div className={styles.heroContent}>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </div>
      </section>
    </Paper>
  );
};

export default Hero;