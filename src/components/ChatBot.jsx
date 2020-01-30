import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { openChatAction } from "../redux/actions";

import { Grid, Dialog, DialogActions, DialogContent, DialogContentText, Button, TextField, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default () => {

  const dispatch = useDispatch()

  const openChat = useSelector(state => state.openChat.open)

  console.log(openChat);

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
          <DialogContentText
            id="scroll-dialog-description"
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        {/* <Box mx={3}><TextField id="outlined-basic" mx={3} fullWidth variant="outlined" size="small" /></Box> */}
        <Box px={3} py={2}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs>
            <Box mr={1}><TextField autoFocus id="outlined-basic" fullWidth variant="outlined" size="small" /></Box>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" disableElevation>
              <Box fontWeight="fontWeightBold" textAlign="left">
                <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
            </Box>
            </Button>
          </Grid>
        </Grid>
        </Box>
      </Dialog>
    </div>
  )
}
