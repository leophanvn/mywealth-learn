/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:34:26
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Head from 'src/components/Head';

import Article from 'src/containers/Article';

const ArticlePage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Article" />
			<Article />
		</>
	);
};

ArticlePage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

ArticlePage.defaultProps = {
	// classes: {},
};

export default ArticlePage;
