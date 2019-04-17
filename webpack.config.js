var path = require('path'),
	webpack = require('webpack'),
	MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
 	devtool: 'eval-source-map',   //set soursemap
 	entry: path.resolve(__dirname, './src/main.js'), 
 	output: {      //set the output path
    	path: path.resolve(__dirname, './build'),
    	filename: "main.js"
  	},
  	module: {
    	rules: [
      		{
	        	test: /\.(js|jsx)$/,
	        	exclude: /node_modules/,
	        	use: {
	          		loader: "babel-loader"
		        }
	      	},
	      	{
			    test: /\.css$/,
			    use: [ 'style-loader', 'css-loader' ]
			},
	      	{
		        test: /\.less$/,
		        use: ['style-loader', 'css-loader', 'less-loader']
		    }
	    ]
  	}
};