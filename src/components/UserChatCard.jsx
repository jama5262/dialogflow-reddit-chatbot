import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

import { Grid, Card, Box, CardContent } from '@material-ui/core';

export default (props) => {

  let animejsClass = `bot${props.data.id}`

  useEffect(() => {
    anime({
      targets: `.${animejsClass}`,
      translateY: [30, 0]
    });
  }, [animejsClass])

  return (
    <Box className={animejsClass} my={3} mb={1}>
      <Grid direction="row" container justify="flex-end">
        <Grid item style={{ maxWidth: "75%" }}>
          <Card variant="outlined" style={{ border: "2px solid #FF4500", borderRadius: "15px" }}>
            <CardContent style={{ padding: "0" }}>
              <Box p={1} fontWeight="fontWeightBold">{props.data.fullfilment}</Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
