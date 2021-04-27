import React, {
  useState,
  useCallback,
   } from "react"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {},
  modal: {
    "outline": 0,
    "top": "42%",
    "left": "50%",
    "transform": "translate(-42%, -50%)",
    "position": "absolute",
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

      <Modal
        disableAutoFocus
        open={promptOpen}
        onClose={handleOpen}
        closeAfterTransition
        disableBackdropClick
      >
        <Paper className={classes.modal}>
          <Box className={classes.content}>
            { promptText }
          </Box>

          <Box className={classes.toolbar}>
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
          </Box>
        </Paper>

      </Modal>

    </>
  )
}


export default PromptButton
