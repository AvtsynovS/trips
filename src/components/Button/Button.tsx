import { bgColors, borders, colors, spaces } from "@assets";
import styled from "styled-components";

type ButtonType = "button" | "reset" | "submit";
type ButtonWidth = "default" | "full";
type ButtonView = "primary" | "ghost" | "link";

type ButtonProps = {
  label?: string;
  view?: ButtonView;
  type?: ButtonType;
  disabled?: boolean;
  width?: ButtonWidth;
  className?: string;
  onClick?: () => void;
};

const StyledButton = styled.button<{
  view: ButtonView;
  width: ButtonWidth;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width === "full" && "100%"};
  padding: ${spaces.s} ${spaces.l};
  border-radius: 0.5em;
  border: ${({ view, disabled }) => {
    if (disabled) return `${borders.disabled}`;

    switch (view) {
      case "primary":
        return `${borders.primary}`;
      case "ghost":
        return `${borders.ghost}`;
      case "link":
      default:
        return "none";
    }
  }};
  font-weight: 500;
  background-color: ${({ view, disabled }) => {
    if (disabled) return `${bgColors.disabled}`;

    switch (view) {
      case "primary":
        return `${bgColors.primary}`;
      case "ghost":
        return `${bgColors.ghost}`;
      case "link":
      default:
        return "transparent";
    }
  }};
  color: ${({ view, disabled }) => {
    if (disabled) return `${colors.disabled}`;

    switch (view) {
      case "ghost":
        return `${colors.ghost}`;
      case "link":
        return `${colors.link}`;
      case "primary":
      default:
        return `${colors.white}`;
    }
  }};
  transition: all 0.3s;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover:not(:disabled) {
    filter: brightness(85%);
  }

  &:active:not(:disabled) {
    box-shadow: ${({ view }) =>
      view !== "link" &&
      `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ view }) =>
      view !== "link" && `0 0 8px -2px rgba(0, 0, 0, 0.25) inset`};
  }

  &:focus-visible:not(:disabled) {
    outline: unset;
  }
`;

export const Button = ({
  className,
  disabled,
  label,
  onClick,
  type,
  view = "primary",
  width = "default",
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      type={type}
      view={view}
      width={width}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
