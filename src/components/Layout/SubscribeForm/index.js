/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:39:00
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

const propTypes = {
	// children: PropTypes.any.isRequired,
};

const defaultProps = {
	// children: null,
};

const SubscribeForm = (props) => {
	// const { children } = props;

	return (
		<div className="newslater-section padding-bottom">
			<div className="container">
				<div className="newslater-area">
					<div className="newslater-content padding-bottom padding-top">
						<span className="cate">SUBSCRIBE TO myWealth.ai</span>
						<h3 className="title">To Get Exclusive Benefits</h3>
						<form className="newslater-form">
							<input type="text" placeholder="Enter Your Email Here" required />
							<button type="submit">subscribe</button>
						</form>
					</div>
					<div className="newslater-thumb">
						<img src="/assets/images/footer/footer.png" alt="footer" />
						<div className="coin-1">
							<img src="/assets/images/footer/Coin_01.png" alt="footer" />
						</div>
						<div className="coin-2">
							<img src="/assets/images/footer/Coin_02.png" alt="footer" />
						</div>
						<div className="coin-3">
							<img src="/assets/images/footer/Coin_03.png" alt="footer" />
						</div>
						<div className="coin-4">
							<img src="/assets/images/footer/Coin_04.png" alt="footer" />
						</div>
						<div className="coin-5">
							<img src="/assets/images/footer/Coin_05.png" alt="footer" />
						</div>
						<div className="coin-6">
							<img src="/assets/images/footer/Coin_06.png" alt="footer" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SubscribeForm.propTypes = propTypes;

SubscribeForm.defaultProps = defaultProps;

export default SubscribeForm;
