import { combineReducers } from "redux";

import { chats } from "./chatsReducer"
import { loading } from "./loadingReducer"
import { suggestions } from "./suggestionsReducer"
import { openChat } from "./openChatReducer"
import { addQuery as query } from "./addQueryReducer"

export default combineReducers({
  chats,
  loading,
  suggestions,
  openChat,
  query
});