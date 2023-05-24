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
			<li className="dropdown">
				<a href="https://thichhoidap.com/about-us">
					About Us <i class="fa fa-chevron-down fa-xs"></i>
				</a>
				<div class="dropdown-content">
					<a href="#founders">Founders' Story</a>
					<a href="#mWteam">mW Team & BOA</a>
					<a href="#work">Work with Us</a>
					<a href="#contact">Contact Us</a>
				</div>
			</li>
			<li>
				<a href="https://thichhoidap.com/mw-roadmap">
					mW Roadmap
				</a>
			</li>
			<li className="dropdown">
				<a href="https://thichhoidap.com/invest">
					Invest  <i class="fa fa-chevron-down fa-xs"></i>
				</a>
				<div class="dropdown-content">
					<a href="#news">mW Portfolios</a>
				</div>
			</li>
			<li className="dropdown">
				<a href="https://thichhoidap.com/liabilities">
					Liabilities  <i class="fa fa-chevron-down fa-xs"></i>
				</a>
				<div class="dropdown-content">
					<a href="#news">Housing Loans</a>
					<a href="#news">Credit Cards</a>
				</div>
			</li>
			<li className="dropdown">
				<a className="active dropbtn" href="/">
					Learn <i class="fa fa-chevron-down fa-xs"></i>
				</a>
				<div class="dropdown-content">
					<a href="#news">News</a>
					<a href="#insights">Insights</a>
					<a href="#podcasts">Podcasts</a>
				</div>
			</li>
			<li>
				<a href="https://thichhoidap.com/support">
					Support
				</a>
			</li>
			{/* <li className="pr-0">
				<a href="https://app.mywealth.ai" className="custom-button">Login</a>
			</li> */}
			<li>
				<SelectLanguages />
			</li>
		</ul>
	);
};

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
