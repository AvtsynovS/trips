import styled from "styled-components";
import { spaces } from "@assets";
import { Card, Slider } from "@components";
import { postList } from "@mocks";
import { PostsTitle } from "./PostsTitle/PostsTitle";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 80px ${spaces.none};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces.l};
`;

const StyledContent = styled.div<{ lastRowItems?: number }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ lastRowItems }) =>
    lastRowItems === 3 ? "space-between" : "flex-start"};
  gap: ${spaces.l};
`;

export const Posts = () => {
  const featured = postList.filter((post) => post.type === "featured");
  const recent = postList.filter((post) => post.type === "recent");
  const lastRowItems = recent.length % 3 || (recent.length === 0 ? 0 : 3);

  return (
    <StyledContainer>
      <StyledWrapper>
        <PostsTitle>Featured Posts</PostsTitle>
        <StyledContent>
          <Slider slides={featured} />
        </StyledContent>
        <PostsTitle>Recent Posts</PostsTitle>
        <StyledContent lastRowItems={lastRowItems}>
          {recent.map((post) => (
            <Card post={post} />
          ))}
        </StyledContent>
      </StyledWrapper>
    </StyledContainer>
  );
};
