export enum ColorType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
  LINK = "link",
  DEFAULT = "default",
}

export type StatusType = "recent" | "featured";

export type PostType = {
  id: string;
  type: StatusType;
  title: string;
  subTitle: string;
  img: string;
  ava: string;
  fullName: string;
  date: string;
};
