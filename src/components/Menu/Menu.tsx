import { menuList } from "@mocks";
import { Button } from "../Button";
import styled from "styled-components";
import { colors, fontSizes, media } from "@assets";
import { spaces } from "@assets";

const StyledWrapper = styled.nav`
  display: flex;
  padding: ${spaces.l} ${spaces.none};

  @media (${media.tablet}) {
    padding: ${spaces.s} ${spaces.none};

    button {
      font-size: ${fontSizes.small};
      padding: ${spaces.none} ${spaces.s};
    }
  }

  @media (${media.mobile}) {
    padding: ${spaces.none};

    button {
      font-size: ${fontSizes.extraSmall};
      padding: ${spaces.none} ${spaces.xs};
    }
  }

  @media (${media.mobileM}) {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  color: ${colors.white};
`;

export const Menu = () => {
  const handleClick = (value: string) => {
    console.log(`redirect to ${value}`);
  };

  return (
    <StyledWrapper>
      {menuList.map((item, index) => (
        <StyledButton
          key={index}
          view="link"
          label={item.toLocaleUpperCase()}
          onClick={() => handleClick(item)}
        />
      ))}
    </StyledWrapper>
  );
};
