import { colors, fonts } from "@assets";
import { ColorType } from "@types";
import { spaces } from "@assets";
import React from "react";

import { styled } from "styled-components";

type WeightType = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps = {
  children: React.ReactNode;
  as?: TitleType;
  color?: ColorType;
  weight?: WeightType;
  padding?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLHeadElement>) => void;
};

const Component = styled("div")<TitleProps>`
  padding: ${({ padding }) => (padding ? padding : `${spaces.none}`)};
  text-align: center;
  color: ${({ color }) => {
    switch (color) {
      case ColorType.PRIMARY:
        return `${colors.white}`;
      case ColorType.SECONDARY:
        return `${colors.primary}`;
      default:
        return `${colors.black}`;
    }
  }};
  font: ${({ as }) => {
    switch (as) {
      case "h1":
        return `${fonts.h1}`;
      case "h2":
        return `${fonts.h2}`;
      default:
        return `${fonts.h3}`;
    }
  }};
`;

export const Title = ({
  children,
  as = "h2",
  weight = 400,
  color = ColorType.SECONDARY,
  className,
  onClick,
  ...props
}: TitleProps) => {
  return (
    <Component
      className={className}
      as={as}
      onClick={onClick}
      color={color}
      {...props}
    >
      {children}
    </Component>
  );
};
