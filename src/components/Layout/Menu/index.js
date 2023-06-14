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
		<div>
			<ul className="menu">
				<li className="dropdown">
					<a href="https://realwealth.ai/about-us">
						About Us <i class="fa fa-chevron-down fa-xs"></i>
					</a>
					<div class="dropdown-content">
						<a href="https://realwealth.ai/founders-story">Founder's Story</a>
						<a href="#mWteam">mW Team & Board of Advisor</a>
						<a href="#work">Work with Us</a>
						<a href="#contact">Contact Us</a>
					</div>
				</li>
				<li>
					<a href="https://realwealth.ai/mw-roadmap">
						mW Roadmap
					</a>
				</li>
				<li className="dropdown">
					<a href="https://realwealth.ai/invest">
						Invest  <i class="fa fa-chevron-down fa-xs"></i>
					</a>
					<div className="dropdown-content">
						<a href="#news">mW Portfolios</a>
						<a href="#news">Structured Products (Launching 2025)</a>
					</div>
				</li>
				<li className="dropdown">
					<a href="https://realwealth.ai/debt">
						Debt  <i class="fa fa-chevron-down fa-xs"></i>
					</a>
					<div className="dropdown-content">
						<a href="#news">Housing Loans</a>
						<a href="#news">Credit Cards</a>
					</div>
				</li>
				<li className="dropdown">
					<a className="active dropbtn" href="/">
						News & Insights <i class="fa fa-chevron-down fa-xs"></i>
					</a>
					<ul className="dropdown-content">
						<li className="dropdown"><a href="/">Learn 101</a>
							<div className="dropdown-menu">
								<ul className="dropdown-content">
									<li><a href="https://learn.realwealth.ai/category/6461dcf10600d097df7e6d12">Trending Topics</a></li>
									<li><a href="https://learn.realwealth.ai/category/62a984a18094e608266f62a6">Investment Basics</a></li>
									<li><a href="https://learn.realwealth.ai/category/62a986f48bb3dd74a72ee879">Personal Finance</a></li>
									<li><a href="https://learn.realwealth.ai/category/62b26df3f681daa8d92bc55c">Growing Your Wealth</a></li>
									<li><a href="https://learn.realwealth.ai/category/62b26e0cf681daa8d92bc55e">Retirement Planning</a></li>
								</ul>
							</div>
						</li>
						<li><a href="#insights">Podcasts & Webinars</a></li>
						<li><a href="#podcasts">Artificial Inteligence</a></li>
					</ul>
				</li>
				<li>
					<a href="https://realwealth.ai/support">
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
		</div>
	);
};

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
