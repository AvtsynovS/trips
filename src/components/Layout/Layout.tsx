import { media, spaces } from "@assets";
import { ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

const StyledWrapper = styled.div`
  padding: ${spaces.none} 250px;
  max-width: 1440px;
  box-sizing: border-box;
  margin: ${spaces.none} auto;

  @media (${media.laptop}) {
    padding: ${spaces.none} 150px;
  }

  @media (${media.tablet}) {
    padding: ${spaces.none} 80px;
  }

  @media (${media.mobile}) {
    padding: ${spaces.none} ${spaces.xxl};
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
