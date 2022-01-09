import styled, { css } from "styled-components";

export const Button = styled.button<{ gradient: string }>(
  ({ gradient }) => css`
    --angle: 0deg;
    animation: 10s rotate linear infinite;
    cursor: pointer;
    border: 5px solid;
    border-image: linear-gradient(var(--angle), ${gradient}) 1;
    min-width: 100px;
    padding: 20px;

    @property --angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes rotate {
      to {
        --angle: 360deg;
      }
    }
    :hover {
      background: linear-gradient(var(--angle), ${gradient} 100%);
      color: white;
    }
  `
);
