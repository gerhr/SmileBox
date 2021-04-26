import React, {
  Children } from "react"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import useStyles from "./styles"


const Bar = ({ children }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      {Children.map(children, child => (
        <Box className={classes.control}>
          { child }
        </Box>
      ))}
    </Paper>
  )
}


export default Bar
