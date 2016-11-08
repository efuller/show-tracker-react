var express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');


// Create our app
const isDeveloping = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
var app = express();

if (isDeveloping) {
	const compiler = webpack(webpackConfig);

	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		contentBase: 'app',
		publicPath: webpackConfig.output.publicPath,
		stats: {
			colors: true,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false,
			modules: false
		}
	}));

	app.use(require('webpack-hot-middleware')(compiler));

	app.use(function (req, res, next){
		if (req.headers['x-forwarded-proto'] === 'https') {
			res.redirect('http://' + req.hostname + req.url);
		} else {
			next();
		}
	});

	app.use(express.static('public'));
} else {
	app.use(express.static('public'));

	app.use(function (req, res, next){
		if (req.headers['x-forwarded-proto'] === 'https') {
			res.redirect('http://' + req.hostname + req.url);
		} else {
			next();
		}
	});
}

app.listen(PORT, function () {
	console.log('Express server is up on port ' + PORT);
});