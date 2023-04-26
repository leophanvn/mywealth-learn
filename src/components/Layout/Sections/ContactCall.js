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
					<div className="col-lg-7">
						<div className="call--item">
							<h3 className="cate">Whether you're starting with $10 or $10M, we're here to help you earn more money.</h3>
							<h5 className="title">Request a call back</h5>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="call-button">
							<a href="Tel:123456789" className="call">
								<img src="/assets/images/call/icon02.png" alt="call" />
							</a>
							<a href="/contact" className="custom-button"> Contact Support</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

ContactCall.propTypes = propTypes;

ContactCall.defaultProps = defaultProps;

export default ContactCall;
