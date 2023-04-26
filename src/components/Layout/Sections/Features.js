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

const FeaturesSection = (props) => {
	// const { } = props;

	return (
		<section className="feature-section padding-top padding-bottom bg_img mt-5" data-background="/assets/images/feature/feature-bg.png" id="feature">
			<div className="ball-1" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball1.png" alt="balls" />
			</div>
			<div className="ball-2" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball2.png" alt="balls" />
			</div>
			<div className="ball-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball3.png" alt="balls" />
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="section-header">
							<span className="cate">Our Amazing Features</span>
							<h2 className="title">
								why should you invest
							</h2>
							<p className="mw-100">
								We are worldwide investment company who are committed to the principle of revenue
								maximization and reduction of the financial risks at investing.
							</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center feature-wrapper">
					<div className="col-md-6 col-sm-10 col-lg-4">
						<div className="feature-item">
							<div className="feature-thumb">
								<img src="/assets/images/feature/feature01.png" alt="feature" />
							</div>
							<div className="feature-content">
								<h5 className="title">Built to make investing easy</h5>
								<p>We'll guide you through portfolio options, risk levels, goal setting, and savings features.</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-10 col-lg-4">
						<div className="feature-item">
							<div className="feature-thumb">
								<img src="/assets/images/feature/feature02.png" alt="feature" />
							</div>
							<div className="feature-content">
								<h5 className="title">Invest with your values</h5>
								<p>Our Socially Responsible Investing helps you make an impact without sacrificing your performance goals.</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-10 col-lg-4">
						<div className="feature-item">
							<div className="feature-thumb">
								<img src="/assets/images/feature/feature03.png" alt="feature" />
							</div>
							<div className="feature-content">
								<h5 className="title">24/7 Support Center</h5>
								<p>Customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSection.propTypes = propTypes;

FeaturesSection.defaultProps = defaultProps;

export default FeaturesSection;
