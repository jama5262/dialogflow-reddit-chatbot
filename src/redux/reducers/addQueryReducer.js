import * as types from "../../utils/constants/actionConstants"

const initialState = {
  text: ""
}

export const addQuery = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_QUERY:
      state = { ...state, text: action.shtextow }
      break;
    default:
      break;
  }
  return state
}