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

import Category from 'src/containers/Learn/Category';

const IndexPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Category" />
			<Category />
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
