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

import { useRouter } from 'next/router';
import Link from 'next/link';

import Menu from 'src/components/Layout/Menu';

const propTypes = {
	// children: PropTypes.any.isRequired,
};

const defaultProps = {
	// children: null,
};

const Header = (props) => {
	// const { children } = props;

	const router = useRouter();

	return (
		<>
			<div className="overlay" />
			<header>
				<div className="header-bottom">
					<div className="container">
						<div className="header-area">
							<div className="logo">
								<a href="https://realwealth.com/">
									<img src="/assets/images/logo/logo.png" alt="logo" />
								</a>
							</div>
							<Menu />
							<div className="header-bar d-lg-none">
								<span />
								<span />
								<span />
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
