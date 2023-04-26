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

import Learn from 'src/containers/Learn/';

const IndexPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="News & Insights" />
			<Learn />
		</>
	);
};

IndexPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

IndexPage.defaultProps = {
	// classes: {},
};

export default IndexPage;
