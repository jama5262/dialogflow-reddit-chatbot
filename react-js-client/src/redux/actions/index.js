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

    if (!query.text.length) {
      dispatch(chatAction({
        "bot": true,
        "fullfilment": "You didn't ask me anything 😐"
      }))
      return
    }

    dispatch(chatAction({
      "bot": false,
      "fullfilment": query.text
    }))
    dispatch(loadingAction(true))
    dispatch(addQueryAction(""))

    axios({
      baseURL: BASE_URL,
      url: '/chatbot',
      params: {
        query: query.text
      }
    })
      .then((response) => {
        dispatch(chatAction(response.data.data))
      })
      .catch((error) => {
        if (error.response) {
          dispatch(chatAction({
            "bot": true,
            "fullfilment": error.response.data.error.fullfilment
          }))
        } else {
          dispatch(chatAction({
            "bot": true,
            "fullfilment": error.message + " 💀"
          }))
        }
      })
      .then(() => {
        dispatch(loadingAction(false))
      })
  }
}