import { ColorType, PostType } from "@types";
import { Title } from "../Title";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { bgColors, radius, colors, spaces } from "@assets";
import { Button } from "../Button";

type SliderProps = {
  slides: PostType[];
  width?: string;
  height?: string;
  autoPlayInterval?: number;
};

const SliderContainer = styled.div<{ width?: string; height?: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "500px"};
  overflow: hidden;
  touch-action: pan-y;
  border-radius: ${radius.m};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Slide = styled.div<{
  isActive: boolean;
  index: number;
  currentIndex: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  transform: ${({ isActive, index, currentIndex }) =>
    isActive
      ? "translateX(0)"
      : `translateX(${100 * (index - currentIndex)}%)`};
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces.m};
  position: absolute;
  bottom: 0;
  width: 100%;
  color: ${colors.white};
  background: ${bgColors.overlayBlackColor};
  box-sizing: border-box;
  padding: ${spaces.m} ${spaces.l} ${spaces.xl};
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces.m};
  flex-grow: 1;

  h3 {
    text-align: left;
    margin: ${spaces.none};
  }

  p {
    margin: ${spaces.none};
  }
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spaces.s};

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${spaces.s};
  }

  p {
    margin: ${spaces.none};
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${bgColors.overlayBlackColor};
  border: none;
  padding: ${spaces.s};
  z-index: 10;

  &:focus {
    outline: none;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: ${spaces.s};
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${spaces.xs};
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  background: ${({ isActive }) =>
    isActive ? `${bgColors.white}` : `${bgColors.overlayWhiteColor}`};
  border-radius: 50%;
  cursor: pointer;
`;

export const Slider = ({
  width,
  height,
  slides,
  autoPlayInterval,
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePreviousSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleClick = (id: string) => {
    console.log("redirect to post by id", id);
  };

  useEffect(() => {
    if (autoPlayInterval && slides) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [slides, autoPlayInterval]);

  return (
    <SliderContainer
      width={width}
      height={height}
    >
      {slides.map(
        ({ id, title, subTitle, img, fullName, ava, date }, index) => (
          <Slide
            key={id}
            isActive={index === currentIndex}
            index={index}
            currentIndex={currentIndex}
            onClick={() => handleClick(id)}
          >
            <SlideImage
              src={img}
              alt={`Slide ${index}`}
            />
            <SlideContent>
              <StyledDescription>
                <Title
                  as="h3"
                  color={ColorType.PRIMARY}
                >
                  {title}
                </Title>
                <p>{subTitle}</p>
              </StyledDescription>
              <StyledFooter>
                <div>
                  <img
                    src={ava}
                    alt="avatar"
                  />
                  <p style={{ margin: 0 }}>{fullName}</p>
                </div>
                <p>{date}</p>
              </StyledFooter>
            </SlideContent>
          </Slide>
        ),
      )}
      <StyledButton
        className="left"
        onClick={handlePreviousSlide}
        disabled={currentIndex === 0}
        label="&lt;"
      />
      <StyledButton
        className="right"
        onClick={handleNextSlide}
        disabled={currentIndex === slides.length - 1}
        label="&gt;"
      />
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};
