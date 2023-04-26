/* eslint-disable @next/next/no-html-link-for-pages */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 21:05:31
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Link from 'next/link';

import classes from './style.module.scss';

const propTypes = {
	data: PropTypes.object.isRequired,
};

const defaultProps = {
	data: {},
};

const BigItem = (props) => {
	const { data } = props;

	return (
		<Link href={'/article/' + data.slug} className={classes.bigItem}>
			<div
				className={classes.bigItemImg}
				style={{
					backgroundSize: 'cover',
					objectFit: 'cover',
					backgroundImage: `url("${data.thumbnail}")`,
				}}
			/>
			<div className={classes.bigItemText}>
				<h5 className={classes.bigItemTitle}>
					{data.title}
				</h5>
				<div className={classes.bigItemCategory}>
					{moment(data.publishedDate).format('LL')}
				</div>
				{/* <div className={classes.newsItemContent}>
					{data.summary}
				</div> */}
			</div>
		</Link>
	);
};

BigItem.propTypes = propTypes;

BigItem.defaultProps = defaultProps;

export default BigItem;
