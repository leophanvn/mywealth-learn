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

const ComingSoonSection = (props) => {
	// const { } = props;

	return (
		<section
			className="investor-section padding-bottom padding-top pt-max-lg-0 pb-5"
			style={{
				backgroundColor: '#fff',
			}}
		>
			<div className="ball-group-1 ball-group-4" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball-group4.png" alt="balls" />
			</div>
			<div className="ball-group-2 ball-group-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30" data-paroller-type="foreground" data-paroller-direction="horizontal">
				<img src="/assets/images/balls/ball-group3.png" alt="balls" />
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10 col-md-12 col-xl-8 mt-5">
						<div className="section-header">
							<h2
								className="title"
								style={{
									fontSize: 55,
									lineHeight: '70px',
								}}
							>
								Coming Soon
							</h2>
							<p>
								We are almost there!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

ComingSoonSection.propTypes = propTypes;

ComingSoonSection.defaultProps = defaultProps;

export default ComingSoonSection;
