import * as types from "../../utils/constants/actionConstants"

const initialState = [
  {
    "id": 1,
    "bot": true,
    "fullfilment": "Greetings 😀, reddit chatbot here 👋. You can ask me about top/hot or new post from different subreddits. Like 'show me top 5 funny posts' or 'I would like new posts from r/ask subreddit, please'. Try it out now 👇"
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