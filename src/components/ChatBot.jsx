import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { openChatAction } from "../redux/actions";

import { Grid, Dialog, DialogContent, Button, TextField, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import UserChatCard from "./UserChatCard"
import BotChatCard from "./BotChatCard"
import Loading from "./Loading"

export default () => {

  const dispatch = useDispatch()

  const openChat = useSelector(state => state.openChat.open)
  const chats = useSelector(state => state.chats)

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
          <Loading/>
          {
            chats.map((x, i) => {
              if(x.bot) {
                return (<BotChatCard key={i} data={x}/>)
              }
              return (<UserChatCard key={i} data={x}/>)
            })
          }
        </DialogContent>
        <Box px={3} py={2}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs>
              <Box mr={1}><TextField autoFocus id="outlined-basic" fullWidth variant="outlined" size="small" /></Box>
            </Grid>
            <Grid item>
              <Button style={{borderRadius: "10px"}} variant="contained" color="primary" disableElevation>
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
