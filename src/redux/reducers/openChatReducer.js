import * as types from "../../utils/constants/actionConstants"

const initialState = {
  open: true
}

export const openChat = (state = initialState, action) => {
  switch (action.type) {
    case types.OPENCHAT:
      state = { ...state, open: action.open }
      break;
    default:
      break;
  }
  return state
}