import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {
    "display": "flex",
    "flex-direction": "row",
    "align-items": "center",
    "flex-wrap": "nowrapn",
    "padding": theme.spacing(0, 2),
    "width": "180px",
    "justify-content": "flex-start"
  },
  label: {
    "margin-left": theme.spacing(1),
    "white-space": "nowrap"
  }
}))


const TimeSort = ({
  reversed,
  onClick }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <IconButton onClick={onClick}>
        {reversed ?
          <KeyboardArrowDownIcon/>
          :<KeyboardArrowUpIcon/>
        }

      </IconButton>
      <Typography className={classes.label} variant="body2">Sort by:{" "}
        {reversed ?
          <>new first</>
          : <>old first</>
        }
      </Typography>
    </Box>
  )
}

export default TimeSort
