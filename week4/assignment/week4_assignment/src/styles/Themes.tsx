import { css } from "@emotion/react";

const color = {
    White: '#FFFFFF',
    Black: '#000000',
    Yellowgreen: '#A5DF00',
    Red: '#FF0000',
    Lightgray: '#E6E6E6',
    Darkbrown: '#61380B',
    Lightblack: '#424242'
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
    font-size: 1rem;
    font-weight: 500;
    line-height: 100%;
  `,
};

export const Theme = {
  color,
  font,
};