import { radius, fontSizes, media } from "@assets";
import { Button, Divider, Title } from "@components";
import { ColorType } from "@types";
import { spaces } from "@assets";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces.l};
  padding: 80px ${spaces.none};
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spaces.none} auto;

  h2 {
    padding: ${spaces.none} ${spaces.s};
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  & input {
    border: none;
    border-radius: ${radius.s} ${radius.none} ${radius.none} ${radius.s};
    min-width: 15vw;
    padding: ${spaces.l} ${spaces.xl};
  }

  & button {
    border-radius: ${radius.none} ${radius.s} ${radius.s} ${radius.none};
    text-transform: capitalize;
  }

  @media (${media.tablet}) {
    & input {
      padding: ${spaces.s} ${spaces.l};
      font-size: ${fontSizes.small};
    }
  }

  @media (${media.mobile}) {
    & input {
      padding: ${spaces.s} ${spaces.l};
      font-size: ${fontSizes.small};
    }

    & button {
      padding: ${spaces.xs} ${spaces.s};
    }
  }

  @media (${media.mobileM}) {
    flex-direction: column;
    gap: ${spaces.s};

    & input {
      padding: ${spaces.s} ${spaces.m};
      font-size: ${fontSizes.extraSmall};
      border-radius: ${radius.s};
    }

    & button {
      padding: ${spaces.s} ${spaces.s};
      border-radius: ${radius.s};
      font-size: ${fontSizes.small};
    }
  }
`;

export const SubscribeForm = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <Title
          as="h2"
          color={ColorType.PRIMARY}
        >
          Stay in Touch
        </Title>
        <Divider />
      </StyledHeader>
      <StyledForm action="">
        <input
          type="text"
          placeholder="Enter your email address"
        />
        <Button
          label="submit"
          view="ghost"
        />
      </StyledForm>
    </StyledWrapper>
  );
};
