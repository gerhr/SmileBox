import React, {
  useState,
  useCallback,
  useEffect } from "react"
import AddIcon from "@material-ui/icons/Add"
import Fab from "@material-ui/core/Fab"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Zoom from "@material-ui/core/Zoom"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import { useTheme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import clsx from "clsx"
import useStyles from "./styles"


const AddButton = ({
    onSave,
    cathegories,
    onClose,
    open,
    cathegory,
    body,
    header
  }) => {
  const classes = useStyles()

  const theme = useTheme()

  const [isEditorOpen, setIsEditorOpen] = useState(open)

  const [state, setState] = useState({
    cathegory,
    body,
    header
  })

  useEffect(_ => {
    setState({cathegory, body, header})
  }, [cathegory, body, header])

  useEffect(_ => {
    setIsEditorOpen(open)
  }, [open])

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const handleStateChange = useCallback(_ => {
    setIsEditorOpen(_ => !isEditorOpen)

    isEditorOpen && onClose()
  }, [isEditorOpen])

  const handleHeaderChange = useCallback(event => {
    setState({
      ...state,
      header: event.target.value
    })
  }, [state])

  const handleBodyChange = useCallback(event => {
    setState({
      ...state,
      body: event.target.value
    })
  }, [state])

  const handleCathegoryChange = useCallback(event => {
    setState({
      ...state,
      cathegory: event.target.value 
    })
  }, [state])

  const handleSave = useCallback(_ => {
    onSave && onSave(state)
    handleStateChange()
  }, [state])

  return (
    <>
      <Modal
        disableAutoFocus
        className={classes.modal}
        open={isEditorOpen}
        onClose={handleStateChange}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isEditorOpen}>
          <Paper className={classes.body}>
            <Grid sm={12} className={classes.row}>
              <TextField
                className={classes.field}
                onChange={handleHeaderChange}
                label="Header"
                margin="normal"
                value={state.header}
              />
            </Grid>

            <Grid sm={12} className={classes.row}>
              <Select
                className={classes.field}
                onChange={handleCathegoryChange}
                value={state.cathegory}
              >
                {
                  cathegories.map(cathegory => (
                    <MenuItem key={`item_${cathegory}`} value={cathegory}>{cathegory}</MenuItem>
                  ))
                }
              </Select>
            </Grid>

            <Grid sm={12} className={classes.row}>
              <TextField
                className={classes.field}
                onChange={handleBodyChange}
                label="What u wanna say?..."
                value={state.body}
                multiline
                rows={12}
              />
            </Grid>

            <Grid sm={12} className={clsx(classes.toolbar, classes.row)}>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
              >
                Save
              </Button>
            </Grid>
          </Paper>
        </Fade>
      </Modal>

      <Zoom
          in={!isEditorOpen}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${!isEditorOpen ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
      >
        <Fab
            onClick={handleStateChange}
            aria-label={"Add"}
            className={classes.root}
            color={"primary"}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </>
  )
}


export default AddButton
