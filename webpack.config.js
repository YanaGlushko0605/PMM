const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
  	main: [
  		 path.resolve(__dirname, './src/main.js'),
  		 path.resolve(__dirname, './src/main.scss'),
  	],
  }	,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [
        {
        	loader: miniCssExtractPlugin.loader,
        },	
          'css-loader',
          'sass-loader',
        ]
      }]
},
plugins: [
	new miniCssExtractPlugin({
		filename: '[name].css'
	}),
]
};	  