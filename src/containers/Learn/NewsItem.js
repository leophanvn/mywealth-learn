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
	style: PropTypes.object,
	category: PropTypes.object,
};

const defaultProps = {
	data: {},
	style: {},
	category: {},
};

const NewsItem = (props) => {
	const { data, style, category } = props;

	return (
		<Link href={'/article/' + data.slug} className={classes.newsItem} style={style}>
			<div
				className={classes.newsItemImg}
				style={{
					backgroundSize: 'cover',
					objectFit: 'cover',
					backgroundImage: `url("${data.thumbnail}")`,
				}}
			/>
			<div className={classes.newsItemText}>
				<div className={classes.newsItemCategory}>
					{category.name ? <strong className="text-primary">{category.name} - </strong> : ''}{moment(data.publishedDate).format('LL')}
				</div>
				<h5 className={classes.newsItemTitle}>
					{data.title}
				</h5>
				<div className={classes.newsItemContent}>
					{data.summary}
				</div>
			</div>
		</Link>
	);
};

NewsItem.propTypes = propTypes;

NewsItem.defaultProps = defaultProps;

export default NewsItem;
