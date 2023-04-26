/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:34:26
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Head from 'src/components/Head';
import Image from 'next/image';

const Error404 = (props) => {
	// const { statusCode } = props;

	React.useEffect(() => {
		$('.loader').fadeOut(1000);
		const img = $('.bg_img');
		img.css('background-image', function () {
			const bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}, []);

	return (
		<>
			<Head title="Oops! 404 Error" />
			<div
				className="h-100 d-flex align-items-center justify-content-center flex-column"
				style={{
					backgroundColor: '#fff',
				}}
			>
				<Image
					src="/assets/images/404.png"
					height={350}
					width={350}
					alt="#"
				/>
				<h3 className="mt-5 fs-xl">404 - This page could not be found.</h3>
			</div>
		</>
	);
};

Error404.propTypes = {
	// classes: PropTypes.object.isRequired,
};

Error404.defaultProps = {
	// classes: {},
};

export default Error404;
