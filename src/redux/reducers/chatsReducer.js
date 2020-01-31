import * as types from "../../utils/constants/actionConstants"

const initialState = [
  {
    "id": 1,
    "bot": false,
    "customFullfilment": "",
    "fullfilment": "Hi",
  },
  {
    "id": 2,
    "bot": true,
    "customFullfilment": "",
    "fullfilment": "Hi! How are you doing?"
  },
  {
    "id": 3,
    "bot": false,
    "customFullfilment": "",
    "fullfilment": "Give me a reddit post",
  },
  {
    "id": 4,
    "bot": true,
    "customFullfilment": "",
    "fullfilment": "Here you go 👍",
    "redditPosts": [
      {
        "subreddit": "r/gif",
        "title": "Snow leopard cub hisses then is sad",
        "url": "/r/gif/comments/6aca6q/snow_leopard_cub_hisses_then_is_sad/"
      },
      {
        "subreddit": "r/gif",
        "title": "It's cute and sad and funny all at once",
        "url": "/r/gif/comments/2ixl99/its_cute_and_sad_and_funny_all_at_once/"
      }
    ]
  },
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