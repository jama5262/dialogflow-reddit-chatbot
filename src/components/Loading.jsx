import React, {useEffect} from 'react'

import anime from 'animejs/lib/anime.es.js';

import { Grid, Chip } from '@material-ui/core';

export default () => {

  useEffect(() => {
    anime({
      targets: '.loadingElement',
      translateY: [-3, 3, 0],
      direction: 'alternate',
      loop: true,
      delay: function(el, i, l) {
        return i * 100;
      },
    });
  }, [])

  const j = (
    <Grid container direction="row" style={{ padding: "4px 0" }}>
      <div className="loadingElement"></div>
      <div className="loadingElement"></div>
      <div className="loadingElement"></div>
    </Grid>
  )

  return (
    <div>
      <Chip label={j} color="primary"/>
    </div>
  )
}
