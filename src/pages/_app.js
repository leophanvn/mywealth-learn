/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:34:26
*------------------------------------------------------- */

import React from 'react';
// import App from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import cookie from 'react-cookies';
import { ConfigProvider } from 'antd';

import UnauthLayout from 'src/components/Layout/UnauthLayout';
import Loader from 'src/components/Layout/Loader';

import wrapperStore from 'src/redux';

import 'src/theme/main.scss';

const MyApp = (props) => {
	const { Component, pageProps } = props;
	const router = useRouter();

	const Layout = Component.Layout || UnauthLayout;

	React.useEffect(() => {
		const handleRouteChangeStart = (url, { shallow }) => {
			if (!shallow) {
				$('.loader').show();
			}
		};
		const handleRouteChangeEnd = (url, { shallow }) => {
			if (!shallow) {
				$('.loader').fadeOut(1000);
				const img = $('.bg_img');
				img.css('background-image', function () {
					const bg = ('url(' + $(this).data('background') + ')');
					return bg;
				});
			}
		};

		router.events.on('routeChangeStart', handleRouteChangeStart);
		router.events.on('routeChangeComplete', handleRouteChangeEnd);
		router.events.on('routeChangeError', handleRouteChangeEnd);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart);
			router.events.off('routeChangeComplete', handleRouteChangeEnd);
			router.events.off('routeChangeError', handleRouteChangeEnd);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#01974e',
				},
			}}
		>
			<Layout>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0" />
				</Head>
				<div className="flex-1">
					<Component {...pageProps} />
				</div>
				{
					!Component.isolation &&
					<Loader />
				}
			</Layout>
		</ConfigProvider>
	);
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

MyApp.getInitialProps = async (context) => {
	const { ctx, Component } = context;

	if (!process.browser) {
		cookie.plugToRequest(ctx.req, ctx.res);
	}

	// calls page's `getInitialProps` and fills `appProps.pageProps`
	let pageProps = {};

	if (Component?.getInitialProps) {
		pageProps = await Component?.getInitialProps(ctx);
	}

	const propsData = {
		...pageProps,
	};

	return {
		pageProps: {
			...propsData,
		},
	};
};

// uncomment if you want to use redux
export default wrapperStore.withRedux(MyApp);
