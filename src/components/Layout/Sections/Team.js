/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-18 11:35:56
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const TeamSection = (props) => {
	// const { } = props;

	return (
		<section className="how-section mt-5 bg_img padding-top padding-bottom pt-max-md-0" style={{ backgroundSize: '100%' }} data-background="/assets/images/affiliate/affiliate-bg.png">
			<div className="ball-3" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball-group9.png" alt="balls" />
			</div>
			<div className="ball-2" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball-group10.png" alt="balls" />
			</div>
			<div className="ball-group-1 ball-group-4" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball-group4.png" alt="balls" />
			</div>
			<div className="ball-group-2 ball-group-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball-group3.png" alt="balls" />
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-header">
							<div className="d-block d-md-none py-5" />
							<div className="d-block d-md-none py-2" />

							<span className="cate">Meet</span>
							<h2 className="title">Key Management</h2>
							{/* <p>
								Our diverse expertise and experience in asset management, private banking, investment banking, and consumer technology have prepared us to better serve you.
							</p> */}
						</div>
					</div>
				</div>
				<div className="row justify-content-center mb-30-none">
					<div className="col-md-6 col-lg-4 col-sm-10 d-flex">
						<div className="how-item flex-1">
							<div className="how-img-wrapper">
								<div className="how-img">
									<img src="assets/images/team/Jerry Yong.jpg" alt="Jerry Yong" />
								</div>
							</div>
							<div className="how-content">
								<h5 className="title">Jerry Yong</h5>
								<h6>Founder & CEO</h6>
								<ul>
									<li>23 years of banking experience primarily in wealth management </li>
									<li>
										Season private banker to regional family office & UHNW
									</li>
									<li>
										Advisor to 2 Single family office
									</li>
									<li>
										Nomura, DBS, UOB
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-sm-10 d-flex">
						<div className="how-item flex-1">
							<div className="how-img-wrapper">
								<div className="how-img">
									<img src="assets/images/team/William Ng Wee Keong.jpg" alt="William Ng Wee Keong" />
								</div>
							</div>
							<div className="how-content">
								<h5 className="title">Professor William Ng</h5>
								<h6>Technology Advisor</h6>
								<ul>
									<li>23 years as professor in school of Computer Science & Engineering, NTU, Singapore</li>
									<li>
										Expert domain artificial intelligence, machine learning & blockchain
									</li>
									<li>
										Supervised 25 Ph.D. students over the years
									</li>
									<li>
										Received various awards & patents
									</li>
									<li>
										<a href="https://personal.ntu.edu.sg/awkng/" target="_blank" rel="noreferrer">View more <i className="flaticon-right" /></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 col-sm-10 d-flex">
						<div className="how-item flex-1">
							<div className="how-img-wrapper">
								<div className="how-img">
									<img src="assets/images/team/Terence Tan.jpg" alt="Terence Tan" />
								</div>
							</div>
							<div className="how-content">
								<h5 className="title">Terence Tan</h5>
								<h6>CIO & Co Founder</h6>
								<ul>
									<li>24 years of investment advisory experience</li>
									<li>
										Formerly Regional Head of Advisory Solutions & Product Management EFG Bank
									</li>
									<li>
										Coutts, UOB Asset Management, DBS Vickers
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container  mt-5">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-header mt-5">
							{/* <span className="cate">Meet</span> */}
							<h2 className="title">Board of Advisor</h2>
							{/* <p>
								Our diverse expertise and experience in asset management, private banking, investment banking, and consumer technology have prepared us to better serve you.
							</p> */}
						</div>
					</div>
				</div>
				<div className="row justify-content-center mb-30-none">
					<div className="col-md-6 col-lg-4 col-sm-10 d-flex">
						<div className="how-item flex-1">
							<div className="how-img-wrapper">
								<div className="how-img">
									<img src="assets/images/team/Daniel Koh.jpg" alt="Daniel Koh" />
								</div>
							</div>
							<div className="how-content">
								<h5 className="title">Daniel Koh</h5>
								<h6>Advisor</h6>
								<ul>
									<li>Formerly a judge in Singapore family court</li>
									<li>
										Expert in financial crimes & securities fraud
									</li>
									<li>
										Partner in CNP law
									</li>
									<li>
										<a href="https://www.cnplaw.com/singapore-lawyers/daniel-koh" target="_blank" rel="noreferrer">View more <i className="flaticon-right" /></a>
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

TeamSection.propTypes = propTypes;

TeamSection.defaultProps = defaultProps;

export default TeamSection;
