import styled from "styled-components";
import { BurgerMenu, Button, Menu, Title } from "@components";
import { colors, fonts, media, spaces } from "@assets";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${media.mobile}) {
    padding: ${spaces.s} ${spaces.none};
  }
`;

const StyledBanner = styled.div`
  font: ${fonts.brand};
  color: ${colors.white};
`;

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 110px ${spaces.none} 160px;
  gap: ${spaces.l};

  & > p {
    color: ${colors.white};
    opacity: 0.6;
    font: ${fonts.subTitle};
    text-align: center;
    margin: ${spaces.none};
  }
`;

const StyledTitle = styled(Title)`
  color: ${colors.white};
  letter-spacing: 2px;
  margin: ${spaces.none};

  @media (${media.tablet}) {
    font: 40px / 35px Lora, serif;
  }
`;

export const Header = () => {
  const handleClick = () => {
    console.log("go to home page");
  };

  return (
    <>
      <StyledWrapper>
        <StyledBanner onClick={handleClick}>Escape.</StyledBanner>
        <Menu />
        <BurgerMenu />
      </StyledWrapper>
      <StyledArticle>
        <StyledTitle forwardedAs="h1">Let's do it together.</StyledTitle>
        <p>
          We travel the world in search of stories. Come along for the ride.
        </p>
        <Button
          view="primary"
          label="View Latest Posts"
        />
      </StyledArticle>
    </>
  );
};
