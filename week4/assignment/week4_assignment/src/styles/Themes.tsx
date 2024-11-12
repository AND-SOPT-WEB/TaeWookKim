import { css } from "@emotion/react";

const color = {
    White: '#FFFFFF',
    Black: '#000000',
    Yellogreen: '#ECF6CE',
    Red: '#FF0000',
    Lightgray: '#E6E6E6',
    Darkbrown: '#61380B',
    Lightblack: '#424242'
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