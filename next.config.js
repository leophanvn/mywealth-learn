/* eslint-disable array-callback-return */
/* eslint-disable import/no-extraneous-dependencies */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:12:49
*------------------------------------------------------- */

const webpack = require('webpack');

const loadEnvConfig = require('./bin/env');

loadEnvConfig();

module.exports = {
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: '/:path*',
	// 			destination: '/:path*',
	// 		},
	// 		{
	// 			source: '/app',
	// 			destination: `${process.env.NEXT_PUBLIC_APP_URL}/app`,
	// 		},
	// 		{
	// 			source: '/app/:path*',
	// 			destination: `${process.env.NEXT_PUBLIC_APP_URL}/app/:path*`,
	// 		},
	// 	];
	// },
	webpack: (config) => {
		config.plugins.push(
			new webpack.EnvironmentPlugin({
				NODE_ENV: process.env.NODE_ENV,
			}),
		);

		return config;
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};
