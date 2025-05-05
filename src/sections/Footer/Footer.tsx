import { colors, fonts, media, spaces } from "@assets";
import { Menu } from "@components";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${media.mobile}) {
    padding: ${spaces.s};

    & > :last-child {
      display: none;
    }
  }
`;

const StyledBanner = styled.div`
  font: ${fonts.brand};
  color: ${colors.white};
  cursor: pointer;
`;

export const Footer = () => {
  const handleClick = () => {
    console.log("go to home page");
  };

  return (
    <StyledWrapper>
      <StyledBanner onClick={handleClick}>Escape.</StyledBanner>
      <Menu />
    </StyledWrapper>
  );
};
