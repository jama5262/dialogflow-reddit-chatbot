import * as types from "../../utils/constants/actionConstants"

const initialState = [
  {
    "id": 1,
    "bot": true,
    "fullfilment": "Hi, I am a reddit chatbot. Below are examples of what you can ask me \n Get me top/new/hot posts"
  }
]

export const chats = (state = initialState, action) => {
  switch (action.type) {
    case types.CHAT:
      state = [...state]
      state.push({
        id: state.length + 1,
        ...action.data
      })
      break
    default:
      break
  }
  return state
}