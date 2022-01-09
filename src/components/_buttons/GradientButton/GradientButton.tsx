import React from "react";
import { Button } from "./GradientButton.styled";

interface ButtonProps {
  gradient: string;
  label: string;
  onClick?: () => void;
}

export const GradientButton = ({
  label,
  gradient = "#12c2e9, #c471ed, #f64f59",
  ...props
}: ButtonProps) => {
  return (
    <Button gradient={gradient} {...props}>
      {label}
    </Button>
  );
};
