const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
    minimizer: [
      // CSS文件压缩
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '**/*',
          context: 'public/',
          globOptions: {
            ignore: ['**/*.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        // 压缩HTML文件
        // title: 'xxx',
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true, // 压缩内联css
      },
    }),
    // 提取单独CSS文件
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    // CSS tree shaking
    new PurgeCSSPlugin({
      paths: glob.sync([
        // 要做css tree shaking的文件路径
        path.resolve(__dirname, '../src/*.tsx'),
        path.resolve(__dirname, '../public/index.html'),
      ]),
    }),
  ],
}
