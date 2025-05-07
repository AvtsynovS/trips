import path from "path";

export const paths = {
  src: path.resolve(__dirname, "../src"),
  build: path.resolve(__dirname, "../build"),
  public: path.resolve(__dirname, "../public"),
  fonts: path.join("fonts", "[name].[contenthash][ext]"),
  icons: path.join("icons", "[name].[contenthash][ext]"),
  images: path.join("images", "[name].[contenthash][ext]"),
};
