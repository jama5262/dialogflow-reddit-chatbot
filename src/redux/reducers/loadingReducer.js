import * as types from "../../utils/constants/actionConstants"

const initialState = {
  showLoading: false
}

export const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      state = { ...state, showLoading: action.showLoading }
      break;
    default:
      break;
  }
  return state
}