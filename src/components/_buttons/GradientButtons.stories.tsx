import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GradientButton } from "./GradientButton/GradientButton";
import { GradientButtonRounded } from "./GradientButtonRounded/GradientButtonRounded";
import { GradientButtonMixedCorner } from "./GradientButtonMixedCorner/GradientButtonMixedCorner";

export default {
  title: "Buttons/Gradient Buttons",
  component: GradientButton,
  argTypes: {},
} as ComponentMeta<typeof GradientButton>;

const Template: ComponentStory<typeof GradientButton> = (args) => (
  <>
    <GradientButton {...args} />
    <GradientButtonRounded {...args} />
    <GradientButtonMixedCorner {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: "Gradient Button",
  gradient: "#12c2e9, #c471ed, #f64f59",
};
