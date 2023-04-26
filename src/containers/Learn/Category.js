/* eslint-disable @next/next/no-html-link-for-pages */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 21:05:31
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import { useDispatch } from 'react-redux';

import { getList } from 'src/redux/actions/article';
import { getOne as getCategory } from 'src/redux/actions/category';
import { getList as getListSubcategory } from 'src/redux/actions/subcategory';
import { useRouter } from 'next/router';

import Loader from 'src/components/Layout/Loader';

import { Input, Button, Space } from 'antd';
import Head from 'src/components/Head';

import NewsItem from './NewsItem';
import classes from './style.module.scss';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const PER_PAGE = 9;

const Learn = () => {
	// const { } = props;

	const router = useRouter();
	const { id: categoryId } = router.query || {};

	const [textSearch, setTextSearch] = React.useState('');
	const [subcategorySelected, setSubcategorySelected] = React.useState(null);
	const [limit, setLimit] = React.useState(PER_PAGE);

	const filterInit = React.useMemo(() => {
		return {
			skip: 0,
			limit,
			where: {
				publishedDate: { lte: +new Date() },
				state: 'published',
				categoryId,
			},
			// include: [
			// 	{
			// 		relation: 'category',
			// 	},
			// ],
		};
	}, [categoryId, limit]);

	const dispatch = useDispatch();

	const { value: categoryData = {} } = useAsyncRetry(async () => {
		const response = await dispatch(await getCategory({
			id: categoryId,
		}));

		return response;
	}, []);

	const { value: subcategoryData = {} } = useAsyncRetry(async () => {
		const response = await dispatch(await getListSubcategory({
			firstLoad: true,
			filter: {
				skip: 0,
				limit: 300,
				where: {
					parentCategoryId: categoryId,
					state: 'published',
				},
			},
		}));

		return response;
	}, []);

	const { value: list = {}, loading } = useAsyncRetry(async () => {
		const where = {};

		if (subcategorySelected) {
			where.subcategoryId = subcategorySelected;
		}

		if (textSearch) {
			const regex = '/' + textSearch + '/i';

			where.or = [
				{ title: { regexp: regex } },
				{ summary: { regexp: regex } },
			];
		}

		const response = await dispatch(await getList({
			firstLoad: limit === PER_PAGE,
			filter: {
				...filterInit,
				skip: 0,
				limit,
				where: {
					...filterInit.where,
					...where,
				},
			},
		}));

		return response;
	}, [textSearch, subcategorySelected, limit]);

	const handleSelectedSubcategory = React.useCallback((id) => {
		setSubcategorySelected((v) => {
			if (v === id) {
				return null;
			}
			return id;
		});
	}, []);

	return (
		<div>
			{
				(loading) && <Loader />
			}
			<Head title={categoryData.name} />

			<section className={classes.section} style={{ paddingTop: 30 }}>
				<div className="container">
					<div className="border-bottom pb-5 mb-5">
						<div>
							<spam className={classes.divider} />
							<div className="row d-flex align-items-center">
								<div className="col-12 col-md-8 mb-4 mb-md-0">
									<h3>{categoryData.name}</h3>
								</div>
								<div className="col-12 col-md-4">
									<Input.Search size="large" placeholder="Search..." onSearch={(v) => setTextSearch(v)} allowClear />
								</div>
							</div>
							<p className="mt-3">{categoryData.desc}</p>
						</div>
					</div>
					<Space size="middle">
						{
							subcategoryData?.data?.map((el) => {
								return (
									<Button size="large" key={el.id} onClick={() => handleSelectedSubcategory(el.id)} type={subcategorySelected === el.id ? 'primary' : 'default'}>
										{el.name}
									</Button>
								);
							})
						}
					</Space>
					{
						list?.data?.length === 0 ?
							<div className="text-center p-5">
								<img src="https://mywealth-files.s3.ap-southeast-1.amazonaws.com/articles/1678888106404-Man%20Resting%20on%20Beach.png" width={250} alt="#" />
								<p>No article to show</p>
							</div> :
							<div className="row d-flex mt-4 flex-wrap">
								{
									list?.data?.map((ar) => {
										return (
											<div className="col-12 col-md-4 d-flex mb-4" key={ar.id}>
												<NewsItem
													data={ar}
													// category={categoryData}
													style={{
														margin: 0,
													}}
												/>
											</div>
										);
									})
								}
							</div>
					}
					<div>
						{
							list.total > limit &&
							<div className="text-center">
								<Button size="large" onClick={() => setLimit((v) => v + PER_PAGE)}>View more</Button>
							</div>
						}
					</div>
				</div>
			</section>
		</div>
	);
};

Learn.propTypes = propTypes;

Learn.defaultProps = defaultProps;

export default Learn;
