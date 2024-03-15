const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output filename for the bundled code
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Rule for handling JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules folder from transpilation
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for modern JS and React
          },
        },
      },
    ],
  },
  mode: 'development', // Development mode for hot reloading
  devServer: { // Development server configuration (optional)
    port: 3000, // Development server port
    hot: true, // Enable hot module replacement
    static: {
        serveIndex: true
    }
  },
};