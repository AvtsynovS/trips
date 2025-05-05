import styled from "styled-components";
import { Title } from "../Title";
import { StatusType, ColorType, PostType } from "@types";
import { radius, spaces } from "@assets";
import { colors, media } from "@assets";

type CardProps = {
  post: PostType;
};

const StyledWrapper = styled.div<{ type: StatusType }>`
  display: flex;
  flex-direction: ${({ type }) => (type === "recent" ? "column" : "row")};
  position: ${({ type }) => type === "featured" && "relative"};
  max-width: ${({ type }) => (type === "recent" ? "30%" : "49%")};
  width: 100%;
  border-radius: ${radius.l};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  & > img {
    width: 100%;
    border-radius: ${radius.l} ${radius.l} ${radius.none} ${radius.none};
  }

  &:hover {
    z-index: 100;
    transform: scale(1.05);
  }

  @media (${media.tablet}) {
    max-width: ${({ type }) => (type === "recent" ? "48%" : "49%")};
  }

  @media (${media.mobile}) {
    max-width: ${({ type }) => (type === "recent" ? "100%" : "49%")};
  }
`;

const StyledDescription = styled.div<{ type: StatusType }>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: ${({ type }) => type === "featured" && "absolute"};
  bottom: ${spaces.none};
  gap: ${spaces.s};
  color: ${({ type }) => type === "featured" && `${colors.white}`};
  padding: ${spaces.l};
  width: 100%;
  box-sizing: border-box;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  gap: ${spaces.m};

  & h3 {
    text-align: left;
    margin: ${spaces.none};
  }

  & p {
    margin: ${spaces.none};
  }
`;

const StyledFooter = styled.div<{ type: StatusType }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spaces.s};
  border-top: ${({ type }) =>
    type === "recent" ? "1px solid rgb(222, 222, 222)" : "none"};
  padding-top: ${({ type }) =>
    type === "recent" ? `${spaces.s}` : `${spaces.none}`};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${spaces.s};
  }

  img {
    opacity: 1;
  }

  p {
    margin: ${spaces.none};
  }
`;

export const Card = ({
  post: { type, title, subTitle, img, ava, date, fullName },
}: CardProps) => {
  const handleClick = () => {
    console.log("go to post");
  };

  return (
    <StyledWrapper
      type={type}
      onClick={handleClick}
    >
      <img
        src={img}
        alt="background"
      />
      <StyledDescription type={type}>
        <StyledContent>
          <Title
            as="h3"
            color={ColorType.SECONDARY}
          >
            {title}
          </Title>
          <p>{subTitle}</p>
        </StyledContent>
        <StyledFooter type={type}>
          <div>
            <img
              src={ava}
              alt="avatar"
            />
            <p>{fullName}</p>
          </div>
          <p>{date}</p>
        </StyledFooter>
      </StyledDescription>
    </StyledWrapper>
  );
};
