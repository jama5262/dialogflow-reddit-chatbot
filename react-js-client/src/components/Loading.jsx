import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

import { Box, Grid, Chip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

export default () => {

  useEffect(() => {
    anime({
      targets: '.loadingElement',
      translateY: [-3, 3, 0],
      direction: 'alternate',
      loop: true,
      delay: function (el, i, l) {
        return i * 100;
      },
      endDelay: function (el, i, l) {
        return (l - i) * 100;
      }
    });
    anime({
      targets: `.loading`,
      translateY: [30, 0],
    });
  })

  const j = (
    <Grid container direction="row" style={{ padding: "4px 0" }}>
      <div className="loadingElement"></div>
      <div className="loadingElement"></div>
      <div className="loadingElement"></div>
    </Grid>
  )

  return (
    <Box className="loading" my={2}>
      <Grid direction="row" spacing={1} container justify="flex-start" style={{ flexWrap: "nowrap" }}>
        <Grid item> <FontAwesomeIcon icon={faRobot} size="2x" color="#FF4500" /></Grid>
        <Grid item>
          <Chip label={j} color="primary" />
        </Grid>
      </Grid>
    </Box>
  )
}
