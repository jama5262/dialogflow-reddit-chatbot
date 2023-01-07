import * as types from "../../utils/constants/actionConstants"

const initialState = {
  open: false
}

export const openChat = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_CHAT:
      state = { ...state, open: action.open }
      break;
    default:
      break;
  }
  return state
}