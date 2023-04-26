/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = [
	// {
	// 	id: '0',
	// 	label: 'Kid\'s Education',
	// 	status: 'pending',
	// 	fund: 0,
	// 	type: 'education',
	// 	duration: '15',
	// 	init: '10000',
	// 	initialAccountId: 'account-1',
	// 	monthlyAccountId: 'account-1',
	// 	monthlyContributions: 666.6666666666666,
	// 	paymentDate: '2022/04/14',
	// 	strategy: 'balanced',
	// 	total: '120000',
	// 	tracking: true,
	// 	autoRebalance: true,
	// 	createdAt: '2022/04/27',
	// },
	// {
	// 	id: '1',
	// 	label: 'Kylie\'s Education in the US',
	// 	fund: 114000,
	// 	performance: 5720,
	// 	performancePercent: 6.6,
	// 	type: 'education',
	// 	status: 'active',
	// 	duration: '15',
	// 	init: '10000',
	// 	initialAccountId: 'account-1',
	// 	monthlyAccountId: 'account-1',
	// 	monthlyContributions: 666.6666666666666,
	// 	paymentDate: '2022/04/14',
	// 	strategy: 'balanced',
	// 	total: '120000',
	// 	tracking: true,
	// 	autoRebalance: true,
	// 	createdAt: '2017/01/20',
	// },
	// {
	// 	id: '2',
	// 	label: 'Villa in Bali',
	// 	fund: 64940,
	// 	performance: 92000,
	// 	performancePercent: 22.95,
	// 	type: 'house',
	// 	status: 'active',
	// 	duration: '20',
	// 	init: '100000',
	// 	initialAccountId: 'account-1',
	// 	monthlyAccountId: 'account-1',
	// 	monthlyContributions: 666.6666666666666,
	// 	paymentDate: '2022/04/14',
	// 	strategy: 'balanced',
	// 	total: '2000000',
	// 	tracking: true,
	// 	autoRebalance: true,
	// 	createdAt: '2014/01/07',
	// },
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_GOAL_SUCCESS': {
			return [
				{
					id: +new Date() + '',
					...action.payload,
					tracking: true,
					autoRebalance: true,
					status: 'pending',
					fund: 0,
					createdAt: new Date(),
				},
				...state,
			];
		}
		case 'EDIT_GOAL_SUCCESS': {
			if (!action.payload?.id) {
				return state;
			}
			return state.map(el => {
				if (el.id === action.payload?.id) {
					return {
						...el,
						...action.payload,
					};
				}
				return {
					...el,
				};
			});
		}
		case 'DELETE_GOAL_SUCCESS': {
			if (!action.payload?.id) {
				return state;
			}
			return state.filter(el => {
				return el.id !== action.payload?.id;
			});
		}
		default:
			return state;
	}
};

export default reducer;
