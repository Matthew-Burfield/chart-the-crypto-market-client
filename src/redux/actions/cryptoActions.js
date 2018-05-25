import axios from 'axios'
import { API_URL } from '../../utils/constants'

export const UPDATE_TOP_20 = 'UPDATE_TOP_20'
export const UPDATE_CURRENT_LIST = 'UPDATE_CURRENT_LIST'

export const updateCurrencyTop20 = payload => {
	return {
		type: UPDATE_TOP_20,
		payload,
	}
}

export const updateCurrentList = payload => {
	return {
		type: UPDATE_CURRENT_LIST,
		payload,
	}
}

export const getTop20 = () => {
	return async dispatch => {
		const currencyList = await getTop20List()
		dispatch(updateCurrencyTop20(currencyList))
	}
}

export const getCurrentlySelected = () => {
	return async dispatch => {
		const currencyList = await getCurrentList()
		dispatch(updateCurrentList(currencyList))
	}
}

const getTop20List = async () => {
	const currencyListLocalStorageKey = 'top_20'
	if (localStorage.getItem(currencyListLocalStorageKey)) {
		return Promise.resolve(
			JSON.parse(localStorage.getItem(currencyListLocalStorageKey)),
		)
	} else {
		const top20List = await axios
			.get(`${API_URL}/top_20`)
			.then(response => response.data.data)
		localStorage.setItem(currencyListLocalStorageKey, JSON.stringify(top20List))
		return top20List
	}
}

const getCurrentList = async () => {
	return await axios.get(`${API_URL}/list`).then(response => response.data.data)
}
