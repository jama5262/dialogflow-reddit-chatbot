import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

import { Grid, Card, Box, CardContent } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

import RedditPostCard from "./RedditPostCard"

const redditPosts = (redditPosts) => {
  if (redditPosts && redditPosts.length) {
    return (
      <Grid spacing={2} container direction="row" style={{ flexWrap: "nowrap" }}>
        <Grid item> <FontAwesomeIcon icon={faRobot} size="2x" color="#FFF" /></Grid>
        <Grid container direction="column" style={{ maxWidth: "72.5%" }}>
          {
            redditPosts.map((x, i) => {
              return (
                <Grid key={i} item style={{ width: "100%" }}>
                  <RedditPostCard data={x} />
                </Grid>
              );
            })
          }
        </Grid>
      </Grid>
    )
  }
}

export default (props) => {

  let animejsClass = `bot${props.data.id}`

  useEffect(() => {
    anime({
      targets: `.${animejsClass}`,
      translateY: [30, 0],
    });
  }, [animejsClass])

  return (
    <Box className={animejsClass} my={2}>
      <Grid direction="row" spacing={1} container justify="flex-start" style={{ flexWrap: "nowrap" }}>
        <Grid item> <FontAwesomeIcon icon={faRobot} size="2x" color="#FF4500" /></Grid>
        <Grid item style={{ maxWidth: "75%" }}>
          <Card variant="outlined" style={{ border: "2px solid #FF4500", background: "#FF4500", borderRadius: "15px" }}>
            <CardContent style={{ padding: "0" }}>
              <Box p={1} fontWeight="fontWeightBold" style={{ color: "white" }}>{props.data.fullfilment}</Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {redditPosts(props.data.redditPosts)}
    </Box>
  )
}
