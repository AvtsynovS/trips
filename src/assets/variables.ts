type SizeType = {
  none: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

type MediaType = {
  mobileM: string;
  mobile: string;
  tablet: string;
  laptop: string;
};

export const spaces: SizeType = {
  none: "0",
  xxs: "2px",
  xs: "4px",
  s: "10px",
  m: "16px",
  l: "20px",
  xl: "30px",
  xxl: "40px",
};

export const radius = {
  none: "0",
  s: "4px",
  m: "6px",
  l: "8px",
};

export const fontSizes = {
  extraSmall: "12px",
  small: "14px",
  medium: "16px",
  large: "18px",
};

export const fonts = {
  brand: "26px/26px Lora, serif",
  h1: "50px/50px Lora, serif",
  h2: "20px/27px Oxygen, sans-serif",
  h3: "22px/30px Oxygen, sans-serif",
  button: "14px/20px Oxygen, sans-serif",
  placeholder: "14px/20px Roboto, sans-serif",
  subTitle: "16px/20px Oxygen, sans-serif",
  cardFooter: "12px/35px Oxygen, sans-serif",
};

export const bgColors = {
  primary: "rgb(221, 120, 63)",
  secondary: "rgb(247, 247, 247)",
  ghost: "rgba(255, 255, 255, 0.275)",
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  overlayBlackColor: "rgba(0, 0, 0, 0.5)",
  overlayWhiteColor: "rgba(255, 255, 255, 0.5)",
  divider: "rgb(222, 222, 222)",
  disabled: "rgb(233, 230, 230)",
};

export const colors = {
  primary: "rgb(46, 46, 46)",
  secondary: "rgb(118, 128, 136)",
  ghost: "rgb(248, 248, 248)",
  link: "rgb(118, 128, 136)",
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  disabled: "rgb(148, 148, 149)",
};

export const borders = {
  primary: "1px solid rgb(221, 120, 63)",
  ghost: "1px solid rgba(255, 255, 255, 0.275)",
  disabled: "1px solid rgba(192, 192, 192, 0.72)",
};

export const media: MediaType = {
  mobileM: "max-width: 425px",
  mobile: "max-width: 768px",
  tablet: "max-width: 1024px",
  laptop: "max-width: 1200px",
};
