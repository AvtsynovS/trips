import { colors, media, radius } from "@assets";
import { spaces } from "@assets";
import { Button } from "../Button";
import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { menuList } from "@mocks";

const BurgerButton = styled.button<{ open?: boolean }>`
  display: none;

  &:focus {
    outline: none;
  }

  @media (${media.mobileM}) {
    display: block;
    position: absolute;
    width: 24px;
    height: 20px;
    padding: ${spaces.none};
    border: none;
    background-color: transparent;
    z-index: 100;
    right: 15px;

    &:before,
    & span,
    &:after {
      display: block;
      content: "";
      position: absolute;
      left: 0;
      top: calc(50% - 2px);
      width: 24px;
      height: 2px;
      background-color: ${({ open }) =>
        open ? `${colors.black}` : `${colors.white}`};
      border-radius: ${radius.s};
      transform-origin: 50% 50%;
    }

    &:before {
      transform: translateY(-7px);
      animation: ${({ open }) => {
        if (open === undefined) {
          return "none";
        }

        return open
          ? "moveTopLine 0.4s forwards"
          : "moveTopLineRev 0.4s forwards";
      }};
    }

    & span {
      animation: ${({ open }) => {
        if (open === undefined) {
          return "none";
        }

        return open
          ? "moveMidLine 0.4s forwards"
          : "moveMidLineRev 0.4s forwards";
      }};
    }

    &:after {
      transform: translateY(7px);
      animation: ${({ open }) => {
        if (open === undefined) {
          return "none";
        }

        return open
          ? "moveBotLine 0.4s forwards"
          : "moveBotLineRev 0.4s forwards";
      }};
    }

    @keyframes moveTopLine {
      0% {
        width: 20px;
        transform: scale(1) translate(5px, -5px);
      }
      25% {
        width: 20px;
        transform: scale(1.5) translate(5px, -6px);
      }
      50% {
        width: 20px;
        transform: scale(1) translate(5px, -5px);
      }
      75% {
        width: 20px;
        transform: scale(1) translate(5px, 0px);
      }
      100% {
        width: 20px;
        transform: scale(1) translate(5px, 0px) rotate(-45deg);
      }
    }

    @keyframes moveMidLine {
      0% {
        transform: scale(1), translateY(-2px);
      }
      25% {
        transform: scale(1.2), translateY(-3px);
      }
      50% {
        transform: scale(1), translateY(-2px);
        opacity: 1;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes moveBotLine {
      0% {
        transform: scale(1) translate(5px, 5px);
      }
      25% {
        transform: scale(1.5) translate(5px, 6px);
      }
      50% {
        transform: scale(1) translate(5px, 5px);
      }
      75% {
        transform: scale(1) translate(5px, 0px);
      }
      100% {
        width: 20px;
        transform: scale(1) translate(5px, 0px) rotate(45deg);
      }
    }

    @keyframes moveTopLineRev {
      0% {
        transform: scale(1) translate(0, 0px) rotate(-45deg);
      }
      25% {
        transform: scale(1.5) translate(0, 0px) rotate(-45deg);
      }
      50% {
        transform: scale(1) translate(0, 0px) rotate(-45deg);
      }
      75% {
        transform: scale(1) translate(0, 0px) rotate(0);
      }
      100% {
        width: 24px;
        transform: scale(1) translate(0, -7px);
      }
    }

    @keyframes moveMidLineRev {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      75% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes moveBotLineRev {
      0% {
        transform: scale(1) translate(0, 0) rotate(45deg);
      }
      25% {
        transform: scale(1.5) translate(0, 0) rotate(45deg);
      }
      50% {
        transform: scale(1) translate(0, 0) rotate(45deg);
      }
      75% {
        transform: scale(1) translate(0, 0) rotate(0);
      }
      100% {
        width: 24px;
        transform: scale(1) translate(0, 7px);
      }
    }
  }
`;

const Menu = styled.nav<{ open?: boolean }>`
  display: none;

  @media (${media.mobileM}) {
    display: flex;
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    flex-direction: column;
    background: ${colors.white};
    text-align: left;
    padding: ${spaces.s};
    position: absolute;
    border-radius: ${radius.none} ${radius.none} ${radius.none} ${radius.s};
    top: 0;
    right: 0;
    width: 50%;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease, visibility 0.3s ease;

    button {
      margin: ${spaces.none} ${spaces.l};

      &:hover {
        background-color: ${colors.primary};
      }
    }
  }
`;

export const BurgerMenu = () => {
  const [open, setOpen] = useState<boolean>();

  const menuRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleMenuItemClick = (value: string) => {
    setOpen(false);
    console.log(`redirect to ${value}`);
  };

  const handleResize = useCallback(() => {
    console.log("window.innerWidth", window.innerWidth);

    if (window.innerWidth > 425) {
      setOpen(undefined);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <BurgerButton
        open={open}
        onClick={() => setOpen(!open)}
        ref={menuRef}
      >
        <span />
      </BurgerButton>
      <Menu open={open}>
        {menuList.map((item, index) => (
          <Button
            key={index}
            view="link"
            label={item.toLocaleUpperCase()}
            onClick={() => handleMenuItemClick(item)}
          />
        ))}
      </Menu>
    </>
  );
};
