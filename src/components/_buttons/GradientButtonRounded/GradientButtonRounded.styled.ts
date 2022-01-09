import styled, { css } from "styled-components";

export const Button = styled.button<{ gradient: string }>(
  ({ gradient }) => css`
    --angle: 0deg;
    animation: 10s rotate linear infinite;
    color: white;
    cursor: pointer;
    background: linear-gradient(var(--angle), ${gradient} 100%);
    border: none;
    border-radius: 50px;
    min-width: 100px;
    padding: 20px 25px;

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
      background: ${gradient.split(",")[0]};
    }
  `
);
