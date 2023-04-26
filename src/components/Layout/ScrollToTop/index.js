/* eslint-disable jsx-a11y/control-has-associated-label */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:39:00
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {
	// children: PropTypes.any.isRequired,
};

const defaultProps = {
	// children: null,
};

const ScrollToTop = (props) => {
	// const { children } = props;

	return (
		<a href="#0" className="scrollToTop"><i className="fas fa-angle-up" /></a>
	);
};

ScrollToTop.propTypes = propTypes;

ScrollToTop.defaultProps = defaultProps;

export default ScrollToTop;
