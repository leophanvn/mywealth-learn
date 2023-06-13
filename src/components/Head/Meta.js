/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 17:34:26
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import METADATA from 'src/constants/metadata';

const propTypes = {
	// title: PropTypes.string.isRequired,
};

const defaultProps = {
	// title: '',
};

const Meta = (props) => {
	// const { title } = props;

	return (
		<>
			<meta name="robots" content="noindex, nofollow"></meta>
			{/* <meta
				name="description"
				content={METADATA.APP_DESCRIPTION}
			/>
			<meta
				content={METADATA.KEY_WORDS}
				name="keywords"
			/>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content={'@' + METADATA.SHORT_NAME} />
			<meta name="twitter:title" content={METADATA.APP_NAME} />
			<meta
				name="twitter:description"
				content={METADATA.APP_DESCRIPTION}
			/>
			<meta name="twitter:image" content={METADATA.IMG_SHARE} />
			<meta property="fb:app_id" content={METADATA.FB_APP_ID} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={METADATA.APP_NAME} />
			<meta
				property="og:description"
				content={METADATA.APP_DESCRIPTION}
			/> */}
			{/* <meta property="og:image" content={METADATA.IMG_SHARE} />
			<meta property="og:image:width" content="200" />
			<meta property="og:image:height" content="200" />
			<meta property="og:locale" content="vi_VN" />
			<meta property="og:url" content={METADATA.WEB_URL} /> */}
		</>
	);
};

Meta.propTypes = propTypes;

Meta.defaultProps = defaultProps;

export default Meta;
