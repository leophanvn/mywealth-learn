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

const TestimonialsSection = (props) => {
	// const { } = props;

	return (
		<section className="client-section padding-bottom padding-top">
			<div className="background-map">
				<img src="/assets/images/client/client-bg.png" alt="client" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10">
						<div className="section-header left-style">
							<span className="cate">TESTIMONIALS</span>
							<h2 className="title"><span>40,000</span> HAPPY CLIENTS AROUND THE WORLD</h2>
							<p className="mw-500">
								We have many happy investors invest with us .Some impresions from our Customers!
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-9">
						<div className="m--30">
							<div className="client-slider owl-carousel owl-theme">
								<div className="client-item">
									<div className="client-content">
										<p>
											Perfect work to start on, support is awesome
										</p>
										<div className="rating">
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star-half-alt" />
											</span>
										</div>
									</div>
									<div className="client-thumb">
										<a href="#0">
											<img src="/assets/images/client/client01.jpg" alt="client" />
										</a>
									</div>
								</div>
								<div className="client-item">
									<div className="client-content">
										<p>
											Very easy to use, perfect for invest
										</p>
										<div className="rating">
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star-half-alt" />
											</span>
										</div>
									</div>
									<div className="client-thumb">
										<a href="#0">
											<img src="/assets/images/client/client02.jpg" alt="client" />
										</a>
									</div>
								</div>
								<div className="client-item">
									<div className="client-content">
										<p>
											Awesome myWealth.ai most profitable site!
										</p>
										<div className="rating">
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star" />
											</span>
											<span>
												<i className="fas fa-star-half-alt" />
											</span>
										</div>
									</div>
									<div className="client-thumb">
										<a href="#0">
											<img src="/assets/images/client/client03.jpg" alt="client" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

TestimonialsSection.propTypes = propTypes;

TestimonialsSection.defaultProps = defaultProps;

export default TestimonialsSection;
