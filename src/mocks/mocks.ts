import post_1 from "../assets/images/post_1.png";
import post_2 from "../assets/images/post_2.png";
import recent_1 from "../assets/images/recent_1.png";
import recent_2 from "../assets/images/recent_2.png";
import recent_3 from "../assets/images/recent_3.png";
import recent_4 from "../assets/images/recent_4.png";
import recent_5 from "../assets/images/recent_5.png";
import recent_6 from "../assets/images/recent_6.png";
import ava_1 from "../assets/images/ava_1.png";
import ava_2 from "../assets/images/ava_2.png";
import { PostType } from "@types";

export const menuList = ["Home", "Categories", "About", "Contact"];

export const navList = [
  "Nature",
  "Photography",
  "Relaxation",
  "Vacation",
  "Travel",
  "Adventure",
];

export const postList: PostType[] = [
  {
    id: "1",
    type: "featured",
    title: "The Road Ahead",
    subTitle: "The road ahead might be paved - it might not be.",
    img: post_1,
    ava: ava_1,
    fullName: "Mat Vogels",
    date: "9/25/2025",
  },
  {
    id: "2",
    type: "featured",
    title: "From Top Down",
    subTitle: "Once a year, go someplace you’ve never been before.",
    img: post_2,
    ava: ava_2,
    fullName: "William Wong",
    date: "9/25/2025",
  },
  {
    id: "3",
    type: "featured",
    title: "Still Standing Tall",
    subTitle: "Life begins at the end of your comfort zone.",
    img: recent_1,
    ava: ava_2,
    fullName: "William Wong",
    date: "9/25/2015",
  },
  {
    id: "4",
    type: "recent",
    title: "Sunny Side Up",
    subTitle: "No place is ever as bad as they tell you it’s going to be.",
    img: recent_2,
    ava: ava_1,
    fullName: "Mat Vogels",
    date: "9/25/2015",
  },
  {
    id: "5",
    type: "recent",
    title: "Water Falls",
    subTitle: "We travel not to escape life, but for life not to escape us.",
    img: recent_3,
    ava: ava_1,
    fullName: "Mat Vogels",
    date: "9/25/2015",
  },
  {
    id: "6",
    type: "recent",
    title: "Through the Mist",
    subTitle: "Travel makes you see what a tiny place you occupy in the world.",
    img: recent_4,
    ava: ava_1,
    fullName: "Mat Vogels",
    date: "9/25/2015",
  },
  {
    id: "7",
    type: "recent",
    title: "Awaken Early",
    subTitle: "Not all those who wander are lost.",
    img: recent_5,
    ava: ava_1,
    fullName: "Mat Vogels",
    date: "9/25/2015",
  },
  {
    id: "8",
    type: "recent",
    title: "Try it Always",
    subTitle:
      "The world is a book, and those who do not travel read only one page.",
    img: recent_6,
    ava: ava_1,
    fullName: "Mat Vogels",
    date: "9/25/2015",
  },
];
