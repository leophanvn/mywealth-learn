/* eslint-disable @next/next/no-html-link-for-pages */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:39:00
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import SelectLanguages from 'src/components/SelectLanguages';

const propTypes = {
	// children: PropTypes.any.isRequired,
};

const defaultProps = {
	// children: null,
};

const Footer = (props) => {
	// const { children } = props;

	return (
		<footer className="footer-section pt-5">
			<div className="container">
				<div className="footer-top">
					<div className="row">
						<div className="col-12 col-md-6 mb-5">
							<div className="logo mb-5">
								<a href="/">
									<img src="/assets/images/logo/footer-logo.png" alt="logo" />
								</a>
							</div>
							<p>16 Sandilands Road, Singapore</p>
							<p>+65 8398 2472</p>
							<p>jerry.yong@myWealth.ai</p>
						</div>
						<div className="col-12 col-md-3 mb-5">
							<h5 className="text-white">Support</h5>
							<ul className="mt-4">
								<li>
									<a href="#">Product Help</a>
								</li>
								<li>
									<a href="#">Learn</a>
								</li>
								<li>
									<a href="#">Partner</a>
								</li>
								<li>
									<a href="#">Community</a>
								</li>
							</ul>
						</div>
						<div className="col-12 col-md-3">
							<h5 className="text-white">Company</h5>
							<ul className="mt-4 ">
								<li>
									<a href="#">About Us</a>
								</li>
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">News & Insights</a>
								</li>
								<li>
									<a href="#">Investor Relation</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="row align-items-center">
						<div className="col-12 col-md-6 mb-4 mb-md-0">
							<div className="left">
								<p>Copyright © 2023 MyWealth.ai</p>
							</div>
						</div>
						<div className="col-12 col-md-6 d-flex">
							<Input size="large" placeholder="Enter your email address" className="flex-1" />
							<Button size="large" className="custom-button ml-2 w-auto">Subscribe</Button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = propTypes;

Footer.defaultProps = defaultProps;

export default Footer;
