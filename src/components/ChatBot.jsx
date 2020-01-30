import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { openChatAction } from "../redux/actions";

import { Dialog } from '@material-ui/core';

export default () => {

  const dispatch = useDispatch()

  const openChat = useSelector(state => state.openChat.open)

  console.log(openChat);

  const handleCloseChat = () => {
    dispatch(openChatAction(false))
  }

  return (
    <div>
      <Dialog onClose={handleCloseChat} open={openChat}>
        <div>This is the dialog</div>
      </Dialog>
    </div>
  )
}
