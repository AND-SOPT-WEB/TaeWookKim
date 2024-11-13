import { css } from "@emotion/react";

const color = {
  black: "#000000",
  white: "#FFFFFF",
  darkgreen: "#122A0A",
  lightgreen: "#0B614B",
  lightgray: "lightgray"
};

const font = {
  H1Large: css`
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 145%;
  `,
  large: css`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 150%;
  `,
  medium: css`
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 0;
  `,
};

export const Theme = {
  color,
  font,
};