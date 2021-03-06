import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    app: path.resolve(__dirname, 'src/app.js'),
    main: path.resolve(__dirname, 'src/index')

  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
     publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //Generate an external css file with a hash in teh filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    //Has the file using MD5 so that their names change when the content changes
    new WebpackMd5Hash(),

    //Use CommonChunkPlugin to create a separate bundle
    //of vendor libraries so that they're cached seperatly
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    //Ceate HTML File that incldes reference to BundleJS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeRedundantAttributes: true,
      //   useShortDoctype: true,
      //   removeEmptyAttributes: true,
      //   removeScriptTypeAttributes: true,
      //   keepClosingSlash: true,
      //   minifyJS: true,
      //   minifyCSS: true,
      //   minifyURLs: true
      // },
      inject: true
    }),

    //Eliminate duplicate packages when generating Bundle
    new webpack.optimize.DedupePlugin(),

    //minifyJS
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module:{
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')},
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader'
        ]
      },

    ]
  }
}
