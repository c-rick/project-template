const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const paths = require('./paths')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map', // webpack5 修改了校验规则
  devServer: {
    hot: true,
    open: true,
    port: process.env.NODE_PORT || 11000,
    // proxy: {
    //   // 路径中有 /api 的接口都会被转到 target 代表的服务
    //   '/api': {
    //     target: 'http://localhost:9092'
    //   }
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ESLintPlugin({
      // Plugin options
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      eslintPath: require.resolve('eslint'),
      failOnError: true,
      context: paths.appSrc,
      cache: true,
      cacheLocation: path.resolve(paths.appNodeModules, '.cache/.eslintcache'),
      // ESLint class options
      cwd: paths.appPath,
      resolvePluginsRelativeTo: __dirname,
      baseConfig: {
        extends: [require.resolve('eslint-config-react-app/base')],
        rules: {
          'react/react-in-jsx-scope': 'error',
        },
      },
    }),
  ],
}
