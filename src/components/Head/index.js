/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:34:26
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import METADATA from 'src/constants/metadata';

import Meta from './Meta';

const propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any,
};

const defaultProps = {
	title: '',
	children: null,
};

const HeadShare = (props) => {
	const { title, children, ...attr } = props;

	return (
		<Head>
			<title>{(title ? title + ' | ' : '') + METADATA.APP_NAME}</title>
			<Meta {...attr} />
			{children}
		</Head>
	);
};

HeadShare.propTypes = propTypes;

HeadShare.defaultProps = defaultProps;

export default HeadShare;
