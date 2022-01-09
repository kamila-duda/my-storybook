import styled, { css } from "styled-components";

export const Button = styled.button<{ gradient: string }>(
  ({ gradient }) => css`
    --angle: 0deg;
    animation: 10s rotate linear infinite;
    color: white;
    cursor: pointer;
    background: linear-gradient(var(--angle), ${gradient} 100%);
    border: none;
    border-radius: 50px 0;
    min-width: 100px;
    padding: 20px 40px;
    transition: 0.5s ease-out;

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
      border-radius: 0 50px;
    }
  `
);
