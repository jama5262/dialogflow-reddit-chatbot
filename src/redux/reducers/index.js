import { combineReducers } from "redux";

import { chats } from "./chatsReducer"
import { loading } from "./loadingReducer"
import { suggestions } from "./suggestionsReducer"
import { openChat } from "./openChatReducer"

export default combineReducers({
  chats,
  loading,
  suggestions,
  openChat
});