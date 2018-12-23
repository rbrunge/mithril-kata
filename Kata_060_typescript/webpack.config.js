const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader',
      exclude: /node_modules/
    }, {
      enforce: "pre",
      test: /\.js$/,
      loader: 'source-map-loader',
      exclude: /node_modules/
    }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'bin')
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['.'] }
    })
  ]
};