import { media, spaces } from "@assets";
import { ReactNode } from "react";
import styled from "styled-components";

type SectionProps = {
  background?: string;
  backgroundImage?: string;
  children?: ReactNode;
};

const SectionWrapper = styled.section<{
  background?: string;
  backgroundImage?: string;
}>`
  position: relative;
  width: 100%;
  margin: ${spaces.none} -250px;
  padding: ${spaces.none} 250px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ background }) => background || "none"};
    background-image: ${({ backgroundImage }) =>
      `url(${backgroundImage})` || "none"};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }

  @media (${media.laptop}) {
    margin: ${spaces.none} -150px;
    padding: ${spaces.none} 150px;
  }

  @media (${media.tablet}) {
    margin: ${spaces.none} -80px;
    padding: ${spaces.none} 80px;
  }

  @media (${media.mobile}) {
    margin: ${spaces.none} -${spaces.xxl};
    padding: ${spaces.none} ${spaces.xxl};
  }
`;

export const Section = ({
  background,
  backgroundImage,
  children,
}: SectionProps) => {
  return (
    <SectionWrapper
      background={background}
      backgroundImage={backgroundImage}
    >
      {children}
    </SectionWrapper>
  );
};
