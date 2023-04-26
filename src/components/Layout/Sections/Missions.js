/* eslint-disable react/no-unescaped-entities */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-18 08:30:51
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const MissionSection = (props) => {
	// const { } = props;

	return (
		<section className="mission-section padding-top padding-bottom">
			<div className="mission-shape">
				<img src="/assets/images/mission/mission-shape.png" alt="about" />
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8 col-lg-10">
						<div className="section-header">
							<span className="cate">Our Mission to help our user</span>
							<h2 className="title">
								To maximize Money
							</h2>
							<p className="mw-100">
								Setting aside cash for an emergency fund, an upcoming expense, or to invest? Keep your cash with Simple.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-5 rtl">
						<div className="mission--thumb">
							<img className="wow slideInLeft" src="/assets/images/mission/mission.png" alt="about" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="mission-wrapper owl-theme owl-carousel">
							<div className="mission-item">
								<div className="mission-thumb">
									<img src="/assets/images/mission/1.png" alt="mission" />
								</div>
								<div className="mission-content">
									<h5 className="title">Built to make investing easy</h5>
									<p>
										We'll guide you through portfolio options, risk levels, goal setting, and savings features.
									</p>
									{/* <a href="#0">Learn More <i className="flaticon-right-arrow" /></a> */}
								</div>
							</div>
							<div className="mission-item">
								<div className="mission-thumb">
									<img src="/assets/images/mission/2.png" alt="mission" />
								</div>
								<div className="mission-content">
									<h5 className="title">Diversified investing</h5>
									<p>
										Start saving, keep saving, move money, withdraw—anything you need.
									</p>
									{/* <a href="#0">Learn More <i className="flaticon-right-arrow" /></a> */}
								</div>
							</div>
							<div className="mission-item">
								<div className="mission-thumb">
									<img src="/assets/images/mission/3.png" alt="mission" />
								</div>
								<div className="mission-content">
									<h5 className="title">Transparent pricing</h5>
									<p>
										Keep things simple with one low, annual fee of 0.25%.
									</p>
									{/* <a href="#0">Learn More <i className="flaticon-right-arrow" /></a> */}
								</div>
							</div>
							<div className="mission-item">
								<div className="mission-thumb">
									<img src="/assets/images/mission/4.png" alt="mission" />
								</div>
								<div className="mission-content">
									<h5 className="title">Invest with your values</h5>
									<p>
										Our Socially Responsible Investing helps you make an impact without sacrificing your performance goals.
									</p>
									{/* <a href="#0">Learn More <i className="flaticon-right-arrow" /></a> */}
								</div>
							</div>
							<div className="mission-item">
								<div className="mission-thumb">
									<img src="/assets/images/mission/1.png" alt="mission" />
								</div>
								<div className="mission-content">
									<h5 className="title">Save on taxes</h5>
									<p>
										Get automated and optimized tax strategies to help you take home more
									</p>
									{/* <a href="#0">Learn More <i className="flaticon-right-arrow" /></a> */}
								</div>
							</div>
							<div className="mission-item">
								<div className="mission-thumb">
									<img src="/assets/images/mission/2.png" alt="mission" />
								</div>
								<div className="mission-content">
									<h5 className="title">Track your finances</h5>
									<p>
										Connect all outside accounts and manage your financial life in one place.
									</p>
									{/* <a href="#0">Learn More <i className="flaticon-right-arrow" /></a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

MissionSection.propTypes = propTypes;

MissionSection.defaultProps = defaultProps;

export default MissionSection;
