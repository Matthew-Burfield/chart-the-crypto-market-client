const webpack = require('webpack')
const Jarvis = require('webpack-jarvis')

module.exports = {
	entry: ['./src/index.js', 'react-hot-loader/patch'],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new Jarvis()],
	devServer: {
		contentBase: './dist',
		hot: true,
	},
}
