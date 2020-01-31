import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { openChatAction } from "../redux/actions";

import { Grid, Dialog, DialogActions, DialogContent, DialogContentText, Button, TextField, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import UserChatCard from "./UserChatCard"
import BotChatCard from "./BotChatCard"

export default () => {

  const dispatch = useDispatch()

  const openChat = useSelector(state => state.openChat.open)

  console.log(openChat);

  const handleCloseChat = () => {
    dispatch(openChatAction(false))
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
        <DialogContent style={{ height: "650px" }} dividers={true}>
          <UserChatCard data="Hi"/>
          <BotChatCard data="Hello, how can I help you"/>
          <UserChatCard data="A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side"/>
          <BotChatCard data="Sure, what else? 😂"/>
          <BotChatCard data="A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side"/>
        </DialogContent>
        {/* <Box mx={3}><TextField id="outlined-basic" mx={3} fullWidth variant="outlined" size="small" /></Box> */}
        <Box px={3} py={2}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs>
              <Box mr={1}><TextField autoFocus id="outlined-basic" fullWidth variant="outlined" size="small" /></Box>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" disableElevation>
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
