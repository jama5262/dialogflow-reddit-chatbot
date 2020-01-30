import * as types from "../../utils/constants/actionConstants"

const initialState = []

export const chats = (state = initialState, action) => {
  switch (action.type) {
    case types.CHAT:
      state = [ ...state ]
      // state.push({
      //   id: state.length + 1,
      //   text: action.text
      // })
      break
    default:
      break
  }
  return state
}