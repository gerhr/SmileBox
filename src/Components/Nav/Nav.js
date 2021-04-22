import React, { Children } from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./styles"


const Nav = ({
  children
}) =>  {
  const classes = useStyles()
  

  return (
    <Box className={classes.root}>
      { Children.map(children, child => (
          <Box className={classes.navItem }> { child } </Box>
        ))
      }
    </Box>
  )
}


export default Nav
