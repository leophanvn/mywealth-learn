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

import SelectLanguages from 'src/components/SelectLanguages';

const propTypes = {
	// children: PropTypes.any.isRequired,
};

const defaultProps = {
	// children: null,
};

const Header = (props) => {
	// const { children } = props;

	return (
		<ul className="menu">
			{/* <li>
				<a href="https://thichhoidap.com/">
					Home
				</a>
			</li> */}
			<li>
				<a href="https://thichhoidap.com/invest">
					Invest
				</a>
			</li>
			<li>
				<a href="https://thichhoidap.com/mw-roadmap">
					mW Roadmap
				</a>
			</li>
			<li>
				<a href="https://thichhoidap.com/product">
					Products
				</a>
			</li>
			<li className="dropdown">
				<a className="active dropbtn" href="/">
					Learn  <i class="fa fa-chevron-down fa-xs"></i>
				</a>
				<div class="dropdown-content">
					<a href="#news">News</a>
					<a href="#insights">Insights</a>
					<a href="#podcasts">Podcasts</a>
				</div>
			</li>
			<li>
				<a href="https://thichhoidap.com/about-us">
					About Us
				</a>
			</li>
			<li className="pr-0">
				<a href="https://app.mywealth.ai" className="custom-button">Login</a>
			</li>
			<li>
				<SelectLanguages />
			</li>
		</ul>
	);
};

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
