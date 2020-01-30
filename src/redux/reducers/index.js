import { combineReducers } from "redux";

import { chats } from "./chatsReducer"
import { loading } from "./loadingReducer"

export default combineReducers({
  chats,
  loading
});