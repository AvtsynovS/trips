import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { paths } from "../config/paths.ts";

import { EnvType } from "./types.ts";

const svgLoaders = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: "convertColors",
              params: { currentColor: true },
            },
          ],
        },
      },
    },
    {
      loader: "file-loader",
      options: {
        name: "icons/[name].[contenthash].[ext]",
      },
    },
  ],
};

const cssLoader = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
};

const babelLoader = {
  test: /\.(t|j)sx?$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
        plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
      },
    },
  ],
  exclude: /node_modules/,
};

const pictureLoader = {
  test: /\.(?:gif|png|jpg|jpeg)$/i,
  type: "asset/resource",
};

const iconLoader = {
  test: /\.ico$/i,
  type: "asset/resource",
  generator: {
    filename: paths.icons,
  },
};

const fountAssetsLoader = {
  test: /\.(woff2?|eot|ttf|otf)$/i,
  type: "asset/resource",
  generator: {
    filename: paths.fonts,
  },
};

export const rules = (env: EnvType) => {
  return [
    pictureLoader,
    iconLoader,
    fountAssetsLoader,
    svgLoaders,
    cssLoader,
    babelLoader,
  ];
};
