import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import dotenv from "dotenv";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { DefinePlugin, Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import { aliases } from "./aliases.ts";
import { paths } from "./paths.ts";
import { rules } from "./rules.ts";
import { EnvType } from "./types.ts";

import type { JsMinifyOptions as SwcOptions } from "@swc/core";

dotenv.config({ path: "./.env.production" });

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config = (env: EnvType): Configuration => {
  return {
    mode: "production",
    entry: `${paths.src}/index.tsx`,
    output: {
      publicPath: "/",
      path: paths.build,
      filename: "[name].[contenthash].bundle.js",
      chunkFilename: "[name].[contenthash].bundle.js",
      clean: true,
    },
    module: {
      rules: rules(env),
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".json"],
      alias: aliases,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Trips",
        inject: "body",
        template: `${paths.public}/index.html`,
        favicon: `${paths.public}/favicon.ico`,
        manifest: `${paths.public}/manifest.json`,
        minify: true,
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "[id].css",
        ignoreOrder: true,
      }),
      new DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
    devtool: false,
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          parallel: true,
        }),
        new TerserPlugin<SwcOptions>({
          minify: TerserPlugin.swcMinify,
          parallel: true,
          terserOptions: {
            compress: true,
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};

export default config;
