/* eslint-disable react/no-unescaped-entities */
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

const ContactCall = (props) => {
	// const { } = props;

	return (
		<section className="call-section call-overlay bg_img" data-background="/assets/images/call/call-bg.jpg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-7 col-xl-6">
						<div className="call-item text-center text-sm-left">
							<div className="call-icon">
								<img src="/assets/images/call/icon01.png" alt="call" />
							</div>
							<div className="call-content">
								<h5 className="title">Setting Aside Cash For An Emergency Fund, An Upcoming Expense, Or To Invest? Keep Your Cash With Simple.</h5>
							</div>
						</div>
					</div>
					<div className="col-md-5 col-xl-6 text-center text-sm-left text-md-right">
						<a href="#0" className="custom-button">Get Started Now! <i className="flaticon-right" /></a>
					</div>
				</div>
			</div>
		</section>
	);
};

ContactCall.propTypes = propTypes;

ContactCall.defaultProps = defaultProps;

export default ContactCall;
