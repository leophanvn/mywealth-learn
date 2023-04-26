/* eslint-disable react/no-invalid-html-attribute */
/* eslint-disable @next/next/no-sync-scripts */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:34:26
*------------------------------------------------------- */

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import Meta from 'src/components/Head/Meta';

import METADATA from 'src/constants/metadata';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html
				lang="en"
				dir="ltr"
			>
				<Head>
					<meta charSet="utf-8" />
					{/* PWA */}
					<link rel="manifest" href="/manifest.json" />

					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="application-name" content={METADATA.SHORT_NAME} />
					<meta name="apple-mobile-web-app-title" content={METADATA.SHORT_NAME} />
					<meta name="theme-color" content={METADATA.PRIMARY_COLOR} />
					<meta name="msapplication-navbutton-color" content={METADATA.PRIMARY_COLOR} />
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
					<meta name="msapplication-starturl" content="/" />

					{/* <link rel="icon" type="image/png" sizes="368x368" href="/icons/icon.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="368x368" href="/icons/icon.png" /> */}

					<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

					{/* END PWA */}
					<Meta />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
				<script src="/assets/js/jquery-3.3.1.min.js" />
				<script src="/assets/js/modernizr-3.6.0.min.js" />
				<script src="/assets/js/plugins.js" />
				<script src="/assets/js/bootstrap.min.js" />
				<script src="/assets/js/magnific-popup.min.js" />
				<script src="/assets/js/jquery-ui.min.js" />
				<script src="/assets/js/wow.min.js" />
				<script src="/assets/js/odometer.min.js" />
				<script src="/assets/js/viewport.jquery.js" />
				<script src="/assets/js/nice-select.js" />
				<script src="/assets/js/owl.min.js" />
				<script src="/assets/js/paroller.js" />
				<script src="/assets/js/circle-progress.js" />
				<script src="/assets/js/main.js" />
			</Html>
		);
	}
}
