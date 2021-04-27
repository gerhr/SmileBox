import React, {
  useState,
  useCallback,
   } from "react"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles(theme => ({
  root: {},
  modal: {
    "outline": 0,
    "width": "280px",
    "background-color": theme.palette.background.paper,
    "box-shadow": theme.shadows[5],
    "padding": theme.spacing(2, 4, 3)
  },
  toolbar: {
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "space-between"
  },
  button: {
    "margin-left": theme.spacing(2)
  },
  content: {
    "width": "100%",
    "padding": theme.spacing(4)
  }
}))


const PromptButton = ({
  label,
  promptText,
  onClick,
  className
}) => {
  const classes = useStyles()

  const [promptOpen, setPromptOpen] = useState(false)

  const handleOpen = useCallback(_ => {
    setPromptOpen(!promptOpen)
  }, [promptOpen, setPromptOpen])

  return (
    <>
      <Button
          className={className}
          onClick={handleOpen}
      >
        { label }
      </Button>

      <Dialog
        classes={{
          paper: classes.modal
        }}
        disableAutoFocus
        open={promptOpen}
        onClose={handleOpen}
        TransitionComponent={Transition}
        closeAfterTransition
        disableBackdropClick
      >
          <DialogContent>
            <DialogContentText>
              { promptText }
            </DialogContentText>
          </DialogContent>


          <DialogActions>
            <Button
                className={classes.button}
                onClick={handleOpen}
            >
              Cancel
            </Button>

            <Button
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={onClick}
            >
              Submit
            </Button>
          </DialogActions>
      </Dialog>

    </>
  )
}


export default PromptButton
