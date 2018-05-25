import { UPDATE_TOP_20, UPDATE_CURRENT_LIST } from '../actions/cryptoActions'

const DEFAULT_STORE = {
	top_20: [],
}

const updateTop20 = (state, action) => ({ ...state, top_20: action.payload })

const updateCurrentList = (state, action) => ({
	...state,
	current_list: action.payload,
})

export default (state = DEFAULT_STORE, action) => {
	switch (action.type) {
		case UPDATE_TOP_20:
			return updateTop20(state, action)
		case UPDATE_CURRENT_LIST:
			return updateCurrentList(state, action)
		default:
			return state
	}
}
