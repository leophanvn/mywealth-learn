/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-31 21:09:37
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const propTypes = {
	style: PropTypes.object,
};

const defaultProps = {
	style: {},
};

const SelectLanguages = (props) => {
	const { style } = props;

	return (
		<div className="languages">
			{/* <i className="flaticon-globe" /> */}
			<Select
				defaultValue="en"
				style={style}
				bordered={false}
				options={[
					{
						value: 'en',
						label: 'English',
					},
					{
						value: 'cn',
						label: '中文',
					},
					{
						value: 'id',
						label: 'Bahasa Indonesia',
					},
				]}
			/>
		</div>
	);
};

SelectLanguages.propTypes = propTypes;

SelectLanguages.defaultProps = defaultProps;

export default SelectLanguages;
