/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_ALERT_SUCCESS': {
			return [
				{
					id: +new Date() + '',
					...action.payload,
					completed: false,
					createdAt: new Date(),
				},
				...state,
			];
		}
		case 'EDIT_ALERT_SUCCESS': {
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
		case 'DELETE_ALERT_SUCCESS': {
			return state.filter(el => {
				return el.id !== action.payload?.id;
			});
		}
		default:
			return state;
	}
};

export default reducer;
