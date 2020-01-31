import React from 'react'

import { Grid, Card, Box, CardContent, Chip, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default () => {
  return (
    <Box mt={1}>
      <Card variant="outlined" style={{ border: "2px solid #FF4500", borderRadius: "15px" }}>
        <CardContent style={{padding: "6px 10px"}}>
          <Grid container direction="column">
            <Grid item sm>
              <Box fontWeight="fontWeightBold" fontSize="overline.fontSize" style={{color: "#FF4500"}}>r/subreddit</Box>
            </Grid>
            <Grid item sm>
              <Typography noWrap style={{fontFamily: "'Quicksand', sans-serif", fontWeight: "700"}}>A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side</Typography>
            </Grid>
            <Grid item sm>
              <Box mt={1} fontWeight="fontWeightBold"><Chip style={{ width: "100%" }} label="/r/gif/comments/6aca6q/snow_leopard_c" color="primary" size="small" icon={<FontAwesomeIcon icon={faPaperPlane} color="#FFF" />} /></Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}
