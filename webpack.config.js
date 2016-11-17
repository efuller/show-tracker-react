const webpack = require('webpack');
const path = require('path');
const normalize = require('node-normalize-scss');

module.exports = {
	entry: [
		'babel-polyfill',
		'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, 'app/index.js')
	],
	output: {
		path: path.join(__dirname + '/public/'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'app')
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /(\.scss)$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			},
			{
				test: /\.svg/,
				loader: 'svg-url-loader'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	sassLoader: {
		includePaths: [
			normalize.includePaths
		]
	},
};