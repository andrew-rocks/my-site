import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "./hero.module.css";
import { Card } from "@mui/material";

type HeroProps = {
  title: string;
  intro: string;
};

const Hero = ({ title, intro }: HeroProps) => {
  return (
    <Card
      raised
      variant="outlined"
      sx={{ flexDirection: "row", bgcolor: "#f0f0f0", p: 2 }}
    >
      <section>
        <div className={styles.container}>
          <StaticImage
            alt="Professional headshot of Andrew Rocks, wearing navy suit and green tie"
            src="../images/headshot.jpeg"
            width={200}
          />
          <div className={styles.heroContent}>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default Hero;
