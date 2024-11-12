import { css } from "@emotion/react";

const color = {
    White: '#FFFFFF',
    Black: '#000000',
    Yellowgreen: '#A5DF00',
    Red: '#FF0000',
    Lightgray: '#E6E6E6',
    Darkbrown: '#61380B',
    Lightblack: '#424242',
    Gray: '#BDBDBD'
};

const font = {
  H1Large: css`
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 280%;
  `,
  large: css`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 150%;
  `,
  medium: css`
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 120%;
  `,
  smallred: css`
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 160%;
  color: red;
  `,
  small: css`
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 100%;
  color: black;
  `
};

export const Theme = {
  color,
  font,
};