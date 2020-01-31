import React from 'react'

import { Grid, Card, Box, CardContent } from '@material-ui/core';

export default (props) => {
  return (
    <Box my={2}>
      <Grid direction="row" container justify="flex-end">
        <Grid item style={{maxWidth: "75%"}}>
          <Card variant="outlined" style={{ border: "2px solid #FF4500" }}>
            <CardContent style={{ padding: "0" }}>
              <Box p={1} fontWeight="fontWeightBold">{props.data}</Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
