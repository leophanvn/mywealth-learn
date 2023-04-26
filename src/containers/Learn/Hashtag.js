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
import { useRouter } from 'next/router';

import Loader from 'src/components/Layout/Loader';

import { Input, Button } from 'antd';
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

const Learn = (props) => {
	// const { } = props;

	const router = useRouter();
	const { hashtag } = router.query || {};

	const [textSearch, setTextSearch] = React.useState('');
	const [limit, setLimit] = React.useState(PER_PAGE);

	const filterInit = React.useMemo(() => {
		return {
			skip: 0,
			limit,
			where: {
				publishedDate: { lte: +new Date() },
				state: 'published',
				hashtag: decodeURIComponent(hashtag),
			},
			include: [
				{
					relation: 'category',
				},
			],
		};
	}, [hashtag, limit]);

	const dispatch = useDispatch();

	const { value: list = {}, loading } = useAsyncRetry(async () => {
		const where = {};

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
	}, [textSearch, limit]);

	return (
		<div>
			{
				(loading) && <Loader />
			}
			<Head title={`Hashtag: #${decodeURIComponent(hashtag)}`} />
			<section className={classes.section} style={{ paddingTop: 30 }}>
				<div className="container">
					<div className="row d-flex align-items-end">
						<div className="col-12 col-md-8 mb-4 mb-md-0">
							<spam className={classes.divider} />
							<p>Hashtag</p>
							<h3>#{decodeURIComponent(hashtag)}</h3>
						</div>
						<div className="col-12 col-md-4">
							<Input.Search size="large" placeholder="Search..." onSearch={(v, e) => setTextSearch(v)} allowClear />
						</div>
					</div>
					{
						list?.data?.length === 0 ?
							<div className="text-center p-5">
								<img src="https://mywealth-files.s3.ap-southeast-1.amazonaws.com/articles/1678888106404-Man%20Resting%20on%20Beach.png" width={250} alt="#" />
								<p>No article to show</p>
							</div> :
							<div className="row d-flex mt-5 flex-wrap">
								{
									list?.data?.map((ar) => {
										return (
											<div className="col-12 col-md-4 d-flex mb-4" key={ar.id}>
												<NewsItem
													data={ar}
													category={ar.category}
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
					{
						list.total > limit &&
						<div className="text-center">
							<Button size="large" onClick={() => setLimit((v) => v + PER_PAGE)}>View more</Button>
						</div>
					}
				</div>
			</section>
		</div>
	);
};

Learn.propTypes = propTypes;

Learn.defaultProps = defaultProps;

export default Learn;
