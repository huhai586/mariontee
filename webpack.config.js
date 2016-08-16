/**
 * Created by howard.hu on 16/8/16.
 */
var path = require("path"),
	webpack = require("webpack")
	// proxy = require("./proxy");

var SRC_PATH = path.join(__dirname, 'src'),
	DIST_PATH = path.join(__dirname, '../static');


var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

	entry: {
		apps: path.join(SRC_PATH, 'app.js')
	},

	resolve: {
		alias: {},
		extensions: ["", ".less", ".css", ".js", ".json"]
	},

	output: {
		path: DIST_PATH,
		publicPath: '',
		filename: "js/[name].js"
	},

	clearBeforeBuild: false,

	plugins: [
		new webpack.optimize.CommonsChunkPlugin(
			'vendors',
			Infinity
		),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			'__DEV__': true
		}),

		new HtmlWebpackPlugin({
			inject: true,
			filename: './index.html',
			template: path.join(SRC_PATH, 'index.html')
		}),
		new webpack.ProvidePlugin({
			_: 'underscore'
		})

	],

	module: {
		noParse: [],

		loaders: [{
			test: /\.js$/,
			loader: "babel",
			query: {
				presets: ['es2015', 'react', 'stage-0']
			},
			include: SRC_PATH,
		},
			{
				test: /\.html$/,
				loader: 'underscore-template-loader'
			},

			{
				test: /\.css$/,
				loader: "style!css!autoprefixer!less"
			},

			{
				test: /\.less$/,
				loader: "style!css!autoprefixer!less"
			},

			{
				test: /\.(png|jpg|gif)$/,
				loader: "url",
				query: {
					limit: 8192,
					name: 'imgs/[name].[ext]'
				}
			},

			{
				test: /\.(eot|woff|woff2|ttf|svg)((\?|\#)[\?\#\w\d_-]+)?$/,
				loader: "url",
				query: {
					limit: 100,
					name: 'fonts/[name].[ext]'
				}
			}
		]
	},

	devServer: {
        hot: true,
        inline:true
	}
};


console.log("initializing webpack developent build....");

module.exports = config;