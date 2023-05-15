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
import Link from 'next/link';
import Slider from 'react-slick';

import { getList } from 'src/redux/actions/article';
import { getList as getListCategory } from 'src/redux/actions/category';

import Loader from 'src/components/Layout/Loader';

import { RightOutlined, LeftOutlined, SwapRightOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import NewsItem from './NewsItem';
import classes from './style.module.scss';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Left = (p) => <RightOutlined {...p} style={{ color: '#fff' }} />;
const Right = (p) => <LeftOutlined {...p} style={{ color: '#fff' }} />;

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
	nextArrow: <Left />,
	prevArrow: <Right />
	,
};

const Learn = (props) => {
	// const { } = props;

	const [textSearch, setTextSearch] = React.useState('');

	const filterInit = React.useMemo(() => {
		return {
			skip: 0,
			limit: 300,
			where: {
				publishedDate: { lte: +new Date() },
				state: 'published',
			},
			// include: [
			// 	{
			// 		relation: 'category',
			// 	},
			// ],
		};
	}, []);

	const dispatch = useDispatch();

	const { value: listCategory = {} } = useAsyncRetry(async () => {
		const response = await dispatch(await getListCategory({
			firstLoad: true,
			filter: {
				skip: 0,
				limit: 300,
				where: { state: 'published' },
			},
		}));

		return response;
	}, []);

	const { value: list = {}, loading, retry } = useAsyncRetry(async () => {
		const where = {};

		if (textSearch) {
			const regex = '/' + textSearch + '/i';

			where.or = [
				{ title: { regexp: regex } },
				{ summary: { regexp: regex } },
			];
		}

		const response = await dispatch(await getList({
			firstLoad: true,
			filter: {
				...filterInit,
				skip: 0,
				where: {
					...filterInit.where,
					...where,
				},
			},
		}));

		return response;
	}, [textSearch]);

	const ListRender = React.useMemo(() => {
		return listCategory?.data?.map((cate) => {
			return {
				...cate,
				news: list?.data?.filter(el => {
					return el.categoryId === cate.id;
				}),
			};
		});
	}, [listCategory, list]);

	return (
		<div>
			<section className={classes.section + ' py-5'} style={{ marginBottom: -90 }}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8 mb-4 mb-md-0">
							{/* <div className={classes.nav}>
								<ul>
									<li>
										<a href="#" className={classes.active}>For you</a>
									</li>
									<li>
										<a href="#">Today</a>
									</li>
									<li>
										<a href="#">Breaking</a>
									</li>
									<li>
										<a href="#">Top Read</a>
									</li>
								</ul>
							</div> */}
						</div>
						<div className="col-12 col-md-4">
							<Input.Search size="large" placeholder="Search..." onSearch={(v, e) => setTextSearch(v)} allowClear />
						</div>
					</div>

				</div>
			</section>
			{
				(loading) && <Loader />
			}
			{
				ListRender?.map((el, i) => {
					return (
						<section className={classes.section + ' ' + (i % 2 === 0 ? '' : classes.bgWhite)} key={el.id}>
							<div className="container">
								<div className="row">
									<div className="col-12 col-md-10 pb-5 pb-md-0">
										<spam className={classes.divider} />
										<Link href={'/category/' + el.id}><h3 style={{ cursor: 'pointer' }}>{el.name}</h3></Link>
										<p className="mt-2">{el.desc}</p>
									</div>
								</div>
								{
									el?.news?.length === 0 ?
										<div className="text-center p-5">
											<img src="https://mywealth-files.s3.ap-southeast-1.amazonaws.com/articles/1678888106404-Man%20Resting%20on%20Beach.png" width={250} alt="#" />
											<p>No article to show</p>
										</div> :
										<>
											{
												el?.news?.length < 3 ?
													<div className="row text-align-center d-flex mt-5">
														{
															el?.news?.map((ar) => {
																return (
																	<div className="col-4 flex-1 d-flex" key={ar.id}>
																		<NewsItem
																			data={ar}
																			// category={el}
																			style={{
																				margin: 0,
																			}}
																		/>
																	</div>
																);
															})
														}
													</div> :
													<>
														<Slider {...settings} className="mt-3">
															{
																el?.news?.map((ar, index) => {
																	if (index > 10) {
																		return null;
																	}
																	return (
																		<NewsItem
																			key={ar.id}
																			data={ar}
																		// category={el}
																		/>
																	);
																})
															}
														</Slider>
														<div className="text-right">
															<Link href={'/category/' + el.id}>View all <SwapRightOutlined style={{ fontSize: 30 }} /></Link>
														</div>
													</>
											}
										</>
								}
							</div>
						</section>
					);
				})
			}

		</div>
	);
};

Learn.propTypes = propTypes;

Learn.defaultProps = defaultProps;

export default Learn;
