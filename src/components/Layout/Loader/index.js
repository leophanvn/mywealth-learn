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

const Loader = (props) => {
	// const { children } = props;

	return (
		<div className="loader">
			<div className="loader-inner">
				<div className="loader-line-wrap">
					<div className="loader-line" />
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line" />
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line" />
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line" />
				</div>
				<div className="loader-line-wrap">
					<div className="loader-line" />
				</div>
			</div>
		</div>
	);
};

Loader.propTypes = propTypes;

Loader.defaultProps = defaultProps;

export default Loader;
