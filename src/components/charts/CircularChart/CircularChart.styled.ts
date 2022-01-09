import styled from "styled-components";

export const Circle = styled.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-linecap: round;
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 50px;
`;
export const Input = styled.input`
  margin: 0px 10px;
`;
