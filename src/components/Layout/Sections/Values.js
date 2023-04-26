/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-18 09:07:54
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const ValuesSection = (props) => {
	// const { } = props;

	return (
		<section className="investor-section padding-bottom padding-top pt-max-lg-0 mb-5">
			<div className="ball-group-1 ball-group-4" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball-group4.png" alt="balls" />
			</div>
			<div className="ball-group-2 ball-group-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball-group3.png" alt="balls" />
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10 col-md-12 col-xl-8">
						<div className="section-header">
							<h2 className="title">
								Our Values
							</h2>
							<p>
								If how we do things resonates with you, We welcome you to myWealth.ai with us!
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-6">
						<p className="mb-5">As one of the best investment platform startups, we believe there are corporate values that we will always instill. These values can be seen from our way of understanding customers by presenting solutions to existing problems. In addition, our commitment to the company and its success makes us a team that is always oriented towards good results and high initiative.</p>
						<p>Of course, we do this to carry out the best action for the company, especially for our customers. Mistakes are the best teachers, so we choose to learn from them and be better from them, this can be achieved by open-minded discussion and debate so that they are always in line to improve the quality in the future. We will not give up to always give the best to our company and our customers because we think differently and take smart risks.</p>
					</div>
					<div className="col-12 col-lg-6">
						<img src="/assets/images/why/how.png" alt="why" />
					</div>
				</div>
			</div>
		</section>
	);
};

ValuesSection.propTypes = propTypes;

ValuesSection.defaultProps = defaultProps;

export default ValuesSection;
