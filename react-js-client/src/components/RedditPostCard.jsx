import React from 'react'

import { Grid, Card, Box, CardContent, Chip, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons'

export default (props) => {
  return (
    <Box mt={1}>
      <a style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href={`https://www.reddit.com${props.data.url}`}>
        <Card variant="outlined" style={{ border: "2px solid #FF4500", borderRadius: "15px" }}>
          <CardContent style={{ padding: "6px 10px" }}>
            <Grid container direction="column">
              <Grid item sm>
                <Box fontWeight="fontWeightBold" fontSize="overline.fontSize" style={{ color: "#FF4500" }}>{props.data.subreddit}</Box>
              </Grid>
              <Grid item sm>
                <Typography noWrap style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: "700" }}>{props.data.title}</Typography>
              </Grid>
              <Grid item sm>
                <Box mt={1} fontWeight="fontWeightBold"><Chip style={{ width: "100%" }} label={props.data.url} color="primary" size="small" icon={<FontAwesomeIcon icon={faRedditAlien} color="#FFF" />} /></Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </a>
    </Box>
  )
}
