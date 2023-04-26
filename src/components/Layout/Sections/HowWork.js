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
import Link from 'next/link';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const HowWorkSection = (props) => {
	// const { } = props;

	return (

		<section className="get-section padding-top padding-bottom">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-10 col-lg-8">
						<div className="section-header">
							<span className="cate">get to know</span>
							<h2 className="title">how we work?</h2>
							<p>
								Follow these simple steps and make profit!
							</p>
						</div>
					</div>
				</div>
				<div className="hover-tab">
					<div className="row justify-content-center">
						<div className="col-lg-6 d-lg-block d-none">
							<div className="hover-tab-area">
								<div className="tab-area">
									<div className="tab-item active first">
										<img src="/assets/images/how/how01.png" alt="how" />
									</div>
									<div className="tab-item second">
										<img src="/assets/images/how/how02.png" alt="how" />
									</div>
									<div className="tab-item third">
										<img src="/assets/images/how/how03.png" alt="how" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-9">
							<div className="hover-tab-menu">
								<ul className="tab-menu">
									<li className="active">
										<div className="menu-thumb">
											<span>
												01
											</span>
										</div>
										<div className="menu-content">
											<h5 className="title">Instant  registration</h5>
											<p>
												Click <Link href="/app">Sign Up</Link> to fill the blank, our 256 SSL will Protect your privacy.
											</p>
										</div>
									</li>
									<li>
										<div className="menu-thumb">
											<span>
												02
											</span>
										</div>
										<div className="menu-content">
											<h5 className="title">MAKE AN INVEST</h5>
											<p>
												<Link href="/app">Login</Link> your account to click invest to start to earn the profit.
											</p>
										</div>
									</li>
									<li>
										<div className="menu-thumb">
											<span>
												03
											</span>
										</div>
										<div className="menu-content">
											<h5 className="title">get profit</h5>
											<p>
												You will get your profit on your profile, also you will get Instant Payment
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

HowWorkSection.propTypes = propTypes;

HowWorkSection.defaultProps = defaultProps;

export default HowWorkSection;
