import React, {
  Children } from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./styles"


const Bar = ({ children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {Children.map(children, child => (
        <Box className={classes.control}>
          { child }
        </Box>
      ))}
    </Box>
  )
}


export default Bar
