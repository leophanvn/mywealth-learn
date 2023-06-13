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
import { useRouter } from 'next/router';
import Error from 'next/error';
import moment from 'moment';
import Link from 'next/link';
import { Tree } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';
import { getList as getListCategory } from 'src/redux/actions/category';
import { StickyContainer, Sticky } from 'react-sticky';

import {
	FacebookShareButton,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	LinkedinShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	RedditShareButton,
	EmailShareButton,
	LivejournalShareButton,
	MailruShareButton,
	ViberShareButton,
	WorkplaceShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	TelegramIcon,
	WhatsappIcon,
	RedditIcon,
	MailruIcon,
	EmailIcon,
	LivejournalIcon,
	ViberIcon,
	WorkplaceIcon,
} from 'react-share';
import urls from 'src/constants/urls';

import { getBySlug, getList } from 'src/redux/actions/article';
import Head from 'src/components/Head';

import NewsItem from './NewsItem';
import BigItem from './BigItem';

import classes from './style.module.scss';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Learn = (props) => {
	// const { } = props;
	const router = useRouter();
	const { slug } = router.query || {};

	const dispatch = useDispatch();

	const { value: data = {}, loading, retry } = useAsyncRetry(async () => {
		if (!slug) {
			return {};
		}

		const response = await dispatch(await getBySlug({
			slug,
			filter: {
				include: [
					{
						relation: 'category',
					},
				],
			},
		}));

		const { data: news = [] } = await dispatch(await getList({
			firstLoad: true,
			filter: {
				skip: 0,
				limit: 6,
				where: {
					id: { neq: response.id },
					publishedDate: { lte: +new Date() },
					state: 'published',
					categoryId: response.categoryId,
				},
			},
		}));

		return {
			...response,
			news: news.filter(el => {
				return el.id !== response.id;
			}),
		};
	}, [slug]);

	const { value: listCategory = {} } = useAsyncRetry(async () => {
		const response = await dispatch(await getListCategory({
			firstLoad: true,
			filter: {
				skip: 0,
				limit: 300,
				where: {},
			},
		}));

		return response;
	}, []);

	if (!data.id && !loading) {
		return <Error statusCode={404} />;
	}

	if (loading) {
		return null;
	}

	const shareUrl = urls.WEB_URL + '/article/' + data.slug;
	const { title } = data;

	const [firstItem, ...newsItems] = data?.news || [];

	return (
		<StickyContainer>
			<div className={classes.wrapper}>
				<Head title={data.title} />

				<section className="pt-4">
					<div className="container pt-md-0">
						<div className="row pt-md-0">
							<div className="col-12 col-md-8 pr-md-5 pb-5">
								<div
									style={{
										borderRadius: 8,
										overflow: 'hidden',
									}}
									className="mb-4"
								>
									<img src={data.thumbnail} alt="#" />
								</div>
								<div className="text-muted mb-2">
									<Link href={'/category/' + data.category?.id}><strong className="text-primary">{data.category?.name}</strong></Link> - {moment(data.publishedDate).format('LL')}
								</div>
								<h1 className="h1">{data.title}</h1>
								{/* <div className="d-flex">
									<div className={classes.shareItem}>
										<FacebookShareButton
											url={shareUrl}
											quote={title}
										>
											<FacebookIcon size={26} round />
										</FacebookShareButton>
									</div>

									<div className={classes.shareItem}>
										<FacebookMessengerShareButton
											url={shareUrl}
											appId="521270401588372"
										>
											<FacebookMessengerIcon size={26} round />
										</FacebookMessengerShareButton>
									</div>

									<div className={classes.shareItem}>
										<TwitterShareButton
											url={shareUrl}
											title={title}
										>
											<TwitterIcon size={26} round />
										</TwitterShareButton>
									</div>

									<div className={classes.shareItem}>
										<TelegramShareButton
											url={shareUrl}
											title={title}
										>
											<TelegramIcon size={26} round />
										</TelegramShareButton>
									</div>

									<div className={classes.shareItem}>
										<WhatsappShareButton
											url={shareUrl}
											title={title}
											separator=":: "
										>
											<WhatsappIcon size={26} round />
										</WhatsappShareButton>
									</div>

									<div className={classes.shareItem}>
										<LinkedinShareButton url={shareUrl}>
											<LinkedinIcon size={26} round />
										</LinkedinShareButton>
									</div>

									<div className={classes.shareItem}>
										<RedditShareButton
											url={shareUrl}
											title={title}
											windowWidth={660}
											windowHeight={460}
										>
											<RedditIcon size={26} round />
										</RedditShareButton>
									</div>

									<div className={classes.shareItem}>
										<LivejournalShareButton
											url={shareUrl}
											title={title}
											description={shareUrl}
										>
											<LivejournalIcon size={26} round />
										</LivejournalShareButton>
									</div>

									<div className={classes.shareItem}>
										<MailruShareButton
											url={shareUrl}
											title={title}
										>
											<MailruIcon size={26} round />
										</MailruShareButton>
									</div>

									<div className={classes.shareItem}>
										<EmailShareButton
											url={shareUrl}
											subject={title}
											body="body"
										>
											<EmailIcon size={26} round />
										</EmailShareButton>
									</div>
									<div className={classes.shareItem}>
										<ViberShareButton
											url={shareUrl}
											title={title}
										>
											<ViberIcon size={26} round />
										</ViberShareButton>
									</div>

									<div className={classes.shareItem}>
										<WorkplaceShareButton
											url={shareUrl}
											quote={title}
										>
											<WorkplaceIcon size={26} round />
										</WorkplaceShareButton>
									</div>
								</div> */}
								<div className="mt-2">
									{
										data.hashtag?.map((el) => {
											return (
												<Link key={el} href={'/hashtag/' + encodeURIComponent(el)}>

													<span className={classes.tag}>#{el}</span>

												</Link>
											);
										})
									}
								</div>
								<div className="ql-editor mt-5" dangerouslySetInnerHTML={{ __html: data.content }} />
							</div>
							<div className={'col-12 col-md-4 p-0 ' + classes.wrapSticky}>
								<Sticky>
									{
										({ style, isSticky }) => {
											return (
												<div className={classes.sticky} style={{ ...style, paddingTop: isSticky ? '100px' : '0px' }}>
													<div className={classes.right}>
														<h5 className="mb-4">Related articles</h5>
														<BigItem
															key={firstItem?.id}
															data={firstItem}
														/>
														{
															newsItems?.map((el) => {
																return (
																	<NewsItem
																		key={el.id}
																		data={el}
																	/>
																);
															})
														}
														<div className="text-right">
															<Link href={'/category/' + data.categoryId}>View all <SwapRightOutlined style={{ fontSize: 30 }} /></Link>
														</div>
													</div>
													<div className={classes.right}>
														<h5 className="mb-2">Categories</h5>
														<ul>
															{
																listCategory.data?.map((el) => {
																	return (
																		<li key={el.id} className="nav-item">
																			<Link href={'/category/' + el.id}>{el.name}</Link>
																		</li>
																	);
																})
															}
														</ul>
													</div>
												</div>
											);
										}
									}
								</Sticky>
							</div>
						</div>
					</div>
				</section>
			</div>
		</StickyContainer>
	);
};

Learn.propTypes = propTypes;

Learn.defaultProps = defaultProps;

export default Learn;
