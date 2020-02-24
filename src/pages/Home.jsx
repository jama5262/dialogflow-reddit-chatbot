import React from 'react'
import { useDispatch } from "react-redux";

import { openChatAction } from "../redux/actions";

import { Grid, Box, Button, Hidden } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

import Chat from "../components/ChatBot"

export default () => {

  const disptch = useDispatch()

  const handleOpenChat = () => {
    disptch(openChatAction(true))
  }

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Hidden only={['xs', 'sm']}>
          <Grid xs={6} item><Box className="elementColor" mb={8} fontSize="h1.fontSize" textAlign="center" fontWeight="fontWeightBold">Dialogflow Reddit Chatbot</Box></Grid>
          <Grid xs={4} item><Box mb={8} fontSize="h5.fontSize" textAlign="center" fontWeight="fontWeightBold">A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side</Box></Grid>
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          <Grid xs={6} item><Box className="elementColor" mb={8} fontSize="h4.fontSize" textAlign="center" fontWeight="fontWeightBold">Dialogflow Reddit Chatbot</Box></Grid>
          <Grid xs={8} item><Box mb={8} fontSize="h6.fontSize" textAlign="center" fontWeight="fontWeightBold">A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side</Box></Grid>
        </Hidden>
        <Grid xs={8} item>
          <Button style={{ borderRadius: "10px" }} onClick={handleOpenChat} variant="contained" color="primary" disableElevation>
            <Box fontWeight="fontWeightBold">
              <FontAwesomeIcon icon={faRobot} /> Start
            </Box>
          </Button>
        </Grid>
      </Grid>
      <Chat />
    </div>
  )
}
