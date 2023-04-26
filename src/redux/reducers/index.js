/* eslint-disable no-param-reassign */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-01-07 19:09:21
*------------------------------------------------------- */

import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import auth, { initialState as authInitial } from './auth';
import loader, { initialState as initialLoader } from './loader';
import settings, { initialState as initialSettings } from './settings';

import goals, { initialState as initialGoals } from './goals';
import alerts, { initialState as initialAlerts } from './alerts';
import deposits, { initialState as initialDeposits } from './deposits';
import users, { initialState as initialUsers } from './users';
import bankAccount, { initialState as initialBankAccount } from './bank-account';

const extractWhiteList = (initialState, state, wl) => {
	const newData = Object.entries(initialState).reduce((preVal, [key, val]) => {
		if (wl.includes(key)) {
			preVal[key] = state[key];
		} else {
			preVal[key] = val;
		}
		return preVal;
	}, {});

	return newData;
};

export const initialState = {
	auth: authInitial,
	loader: initialLoader,
	settings: initialSettings,
	goals: initialGoals,
	alerts: initialAlerts,
	deposits: initialDeposits,
	users: initialUsers,
	bankAccount: initialBankAccount,
};

export const whitelist = ['settings'];

const appReducer = combineReducers({
	auth,
	loader,
	settings,
	goals,
	alerts,
	deposits,
	users,
	bankAccount,
});

const reducers = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		return nextState;
	}
	return appReducer(action.type === 'LOGOUT_SUCCESS' ? extractWhiteList(initialState, state, whitelist) : state, action);
};

export default reducers;
