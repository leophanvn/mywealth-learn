/* eslint-disable @next/next/no-html-link-for-pages */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:19:10
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const StatsSection = (props) => {
	// const { } = props;

	return (
		<div className="counter-section">
			<div className="container">
				<div className="row align-items-center mb-30-none justify-content-center">
					<div className="col-sm-6 col-md-4">
						<div className="counter-item">
							<div className="counter-thumb">
								<img src="/assets/images/counter/counter01.png" alt="counter" />
							</div>
							<div className="counter-content">
								<div className="counter-header">
									<h3 className="title odometer" data-odometer-final="36.9">0</h3><h3 className="title">M</h3>
								</div>
								<p>Registered users</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="counter-item">
							<div className="counter-thumb">
								<img src="/assets/images/counter/counter02.png" alt="counter" />
							</div>
							<div className="counter-content">
								<div className="counter-header">
									<h3 className="title odometer" data-odometer-final={174}>0</h3>
								</div>
								<p>Countries Supported</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="counter-item">
							<div className="counter-thumb">
								<img src="/assets/images/counter/counter03.png" alt="counter" />
							</div>
							<div className="counter-content">
								<div className="counter-header">
									<h3 className="title">$</h3><h3 className="odometer title" data-odometer-final="10.8">0</h3><h3 className="title">M</h3>
								</div>
								<p>Average Investment</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

StatsSection.propTypes = propTypes;

StatsSection.defaultProps = defaultProps;

export default StatsSection;
