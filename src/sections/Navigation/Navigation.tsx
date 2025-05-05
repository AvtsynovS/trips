import { fontSizes, media } from "@assets";
import { Button } from "@components";
import { navList } from "@mocks";
import { spaces } from "@assets";
import styled from "styled-components";

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: ${spaces.l};
  padding: ${spaces.s} ${spaces.none};

  & > button {
    padding: ${spaces.none};
    font-weight: 700;
  }

  @media (${media.tablet}) {
    gap: ${spaces.m};

    & > button {
      font-weight: 500;
      font-size: ${fontSizes.small};
    }
  }

  @media (${media.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (${media.mobileM}) {
    & > button {
      font-size: ${fontSizes.extraSmall};
    }
  }
`;

export const Navigation = () => {
  return (
    <StyledWrapper>
      {navList.map((label, index) => (
        <Button
          key={index}
          view="link"
          label={label}
          onClick={() => console.log(`click to ${label}`)}
        />
      ))}
    </StyledWrapper>
  );
};
