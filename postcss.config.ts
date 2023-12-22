import { Config } from "postcss-load-config/src";

const postcssConfig: Config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default postcssConfig;
