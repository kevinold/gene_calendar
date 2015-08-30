var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entry = './web/static/js/index.js';
var publicPath = 'http://localhost:4001/';

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});


module.exports = {
  entry: [
    'webpack-dev-server/client?' + publicPath,
    'webpack/hot/only-dev-server',
    entry
  ],
  output: {
    path: __dirname + '/.priv/static/js',
    publicPath: publicPath,
    filename: 'wp_bundle.js',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader') }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
