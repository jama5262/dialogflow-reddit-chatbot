import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { openChatAction, detectIntent, addQueryAction } from "../redux/actions";

import { Grid, Dialog, DialogContent, Button, TextField, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import UserChatCard from "./UserChatCard"
import BotChatCard from "./BotChatCard"
import Loading from "./Loading"

export default () => {

  const dispatch = useDispatch()

  const openChat = useSelector(state => state.openChat.open)
  const query = useSelector((state) => state.query.text)
  const chats = useSelector(state => state.chats)
  const loading = useSelector(state => state.loading.show)

  useEffect(() => {
    let chatDialog = document.getElementById("chatDialog")
    if(chatDialog) {
      chatDialog.scrollTop = chatDialog.scrollHeight
    }
  })

  const handleCloseChat = () => {
    dispatch(openChatAction(false))
  }

  const handleAddQuery = (value) => {
    dispatch(addQueryAction(value))
  }

  const handleDetectIntent = () => {
    dispatch(detectIntent())
  }

  const handleOnEnterPressed = (event) => {
    if (event && event.key === "Enter") {
      handleDetectIntent()
    }
  }

  return (
    <div>
      <Dialog
        onClose={handleCloseChat}
        open={openChat}
        scroll="paper"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogContent id="chatDialog" style={{ height: "650px" }} dividers={true}>
          {
            chats.map((x, i) => {
              if (x.bot) {
                return (<BotChatCard className="chat" key={i} data={x} />)
              }
              return (<UserChatCard className="chat" key={i} data={x} />)
            })
          }
          {loading ? (<Loading />) : null}
        </DialogContent>
        <Box px={3} py={2}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs>
              <Box mr={1}><TextField onKeyDown={(e) => handleOnEnterPressed(e)} onChange={(e) => handleAddQuery(e.target.value)} value={query} autoFocus id="outlined-basic" fullWidth variant="outlined" size="small" /></Box>
            </Grid>
            <Grid item>
              <Button onClick={handleDetectIntent} style={{ borderRadius: "10px" }} variant="contained" color="primary" disableElevation>
                <Box fontWeight="fontWeightBold" textAlign="left">
                  <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  )
}
