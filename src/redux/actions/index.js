import axios from "axios"

import { BASE_URL } from "../../utils/constants/baseUrlConstant"
import * as types from "../../utils/constants/actionConstants"

export const addQueryAction = text => ({ type: types.ADD_QUERY, text })
export const openChatAction = open => ({ type: types.OPEN_CHAT, open })
export const loadingAction = show => ({ type: types.LOADING, show })
export const chatAction = data => ({ type: types.CHAT, data })
export const detectIntent = () => {
  return (dispatch, getState) => {
    const { query } = getState()

  }
}