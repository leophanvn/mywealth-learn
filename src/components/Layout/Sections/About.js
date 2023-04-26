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

const AboutSection = (props) => {
	// const { } = props;

	return (
		<section className="about-section padding-top padding-bottom" id="about">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 d-none d-lg-block rtl">
						<img src="/assets/images/about/about.png" alt="about" />
					</div>
					<div className="col-lg-6">
						<div className="section-header left-style">
							<span className="cate">Welcome to myWealth.ai</span>
							<h2 className="title">about myWealth.ai</h2>
							<p>
								We are a startup company with a mission to increase financial literacy in all circles of society through the most optimal investment technology. Our platform is easy to use for both beginners and advanced users as we will help you to invest smartly. We believe that everyone has an equal opportunity to invest in the right way to achieve a better future.
							</p>
						</div>
						<div className="about--content">
							<div className="about-item">
								<div className="about-thumb">
									<img src="/assets/images/about/about01.png" alt="about" />
								</div>
								<div className="about-content">
									<h5 className="title">Easy</h5>
									<p>
										Get started with as little as $10 and use our top-rated mobile app to invest on the go.
									</p>
								</div>
							</div>
							<div className="about-item">
								<div className="about-thumb">
									<img src="/assets/images/about/about02.png" alt="about" />
								</div>
								<div className="about-content">
									<h5 className="title">Optimized</h5>
									<p>
										We put the robots to work for you, with automated tools and strategies that help unlock your money’s potential.
									</p>
								</div>
							</div>
							<div className="about-item">
								<div className="about-thumb">
									<img src="/assets/images/about/about03.png" alt="about" />
								</div>
								<div className="about-content">
									<h5 className="title">Personalized</h5>
									<p>
										Customize your account, either as hands on as you want, or with our guidance along the way.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

AboutSection.propTypes = propTypes;

AboutSection.defaultProps = defaultProps;

export default AboutSection;
