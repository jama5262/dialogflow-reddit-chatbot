import React from 'react'
import { Grid, Box, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

export default () => {
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid xs={5} item><Box style={{color: "#FF4500"}} mb={8} fontSize="h1.fontSize" textAlign="center" fontWeight="fontWeightBold">Dialogflow Reddit Chatbot</Box></Grid>
        <Grid xs={4} item><Box mb={8} fontSize="h5.fontSize" textAlign="center" fontWeight="fontWeightBold">A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side</Box></Grid>
        <Grid xs={8} item>
          <Button variant="contained" color="primary" disableElevation>
            <Box fontWeight="fontWeightBold">
              <FontAwesomeIcon icon={ faRobot } /> Start
            </Box>
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}