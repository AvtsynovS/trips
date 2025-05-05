import { Divider, Title } from "@components";
import { spaces } from "@assets";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spaces.none} auto;

  h2 {
    padding: ${spaces.none} ${spaces.s};
  }
`;

export const PostsTitle = ({ children }: PropsWithChildren) => {
  return (
    <StyledWrapper>
      <Title as="h2">{children}</Title>
      <Divider />
    </StyledWrapper>
  );
};
