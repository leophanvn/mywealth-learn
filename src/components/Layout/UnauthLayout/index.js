/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:39:00
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Layout/Header';
import Footer from 'src/components/Layout/Footer';
import ScrollToTop from 'src/components/Layout/ScrollToTop';

const propTypes = {
	children: PropTypes.any.isRequired,
};

const defaultProps = {
	children: null,
};

const UnauthLayout = (props) => {
	const { children } = props;

	return (
		<div className="main--body">
			<Header />
			{children}
			<Footer />
			<ScrollToTop />
		</div>
	);
};

UnauthLayout.propTypes = propTypes;

UnauthLayout.defaultProps = defaultProps;

export default UnauthLayout;
