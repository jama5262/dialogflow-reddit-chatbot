import * as types from "../../utils/constants/actionConstants"

const initialState = {
  show: false
}

export const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      state = { ...state, show: action.show }
      break;
    default:
      break;
  }
  return state
}