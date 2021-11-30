const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      title: 'Audiophile',
   //   favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),
    new HtmlWebpackPlugin({  
      template: paths.src + '/headphones.html',
      filename: 'headphones.html',
    }),
    new HtmlWebpackPlugin({  
      template: paths.src + '/earphones.html',
      filename: 'earphones.html',
    }), 
    new HtmlWebpackPlugin({ 
      template: paths.src + '/speakers.html',
      filename: 'speakers.html',
    }),
    new HtmlWebpackPlugin({ 
      template: paths.src + '/mark-2.html',
      filename: 'mark-2.html',
    }),
    new HtmlWebpackPlugin({ 
      template: paths.src + '/mark-1.html',
      filename: 'mark-1.html',
    }),
    new HtmlWebpackPlugin({ 
      template: paths.src + '/xx59.html',
      filename: 'xx59.html',
    }),
    new HtmlWebpackPlugin({ 
      template: paths.src + '/zx9.html',
      filename: 'zx9.html',
    }),
    new HtmlWebpackPlugin({ 
      template: paths.src + '/zx7.html',
      filename: 'zx7.html',
    }),
    new HtmlWebpackPlugin({ 
      template: paths.src + '/yx1.html',
      filename: 'yx1.html',
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
