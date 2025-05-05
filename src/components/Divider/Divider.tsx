import { bgColors } from "@assets";
import { ColorType } from "@types";
import styled from "styled-components";

type DividerProps = {
  color?: ColorType;
  className?: string;
};

const DividerWrapper = styled.div<{
  color: ColorType;
}>`
  display: flex;
  align-items: center;
  background-color: ${bgColors.divider};
  height: 1px;
  width: 100%;

  & span {
    white-space: nowrap;
  }
`;

export const Divider = ({
  color = ColorType.PRIMARY,
  className,
}: DividerProps) => {
  return (
    <DividerWrapper
      className={className}
      color={color}
    />
  );
};
