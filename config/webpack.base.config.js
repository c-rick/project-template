const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: resolve('src/index.tsx'),
  },
  output: {
    filename: 'app.[contenthash:8].js',
    path: resolve(process.cwd(), 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash:8].[ext]',
            outputPath: './images/',
            limit: 10240,
          },
        },
      },
      {
        test: /\.(ttf|svg|eot|woff|woff2)$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}
