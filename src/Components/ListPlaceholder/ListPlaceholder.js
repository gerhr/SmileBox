import React from "react"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import placeholder from "./images/_____.png"
import Typography from "@material-ui/core/Typography"


const useStyles = makeStyles(theme => ({
  root: {
    "width": "100%",
    "padding": theme.spacing(6, 0, 2, 0),
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
  },
  image: {
    "height": "320px"
  },
  text: {
    color: theme.palette.grey[600]
  }
}))


const ListPlaceholder = _ => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <img src={placeholder} className={classes.image} alt=""/>
      <Typography variant="h5" className={classes.text}>
        Got NOTHING here!
      </Typography>      
    </Box>
  )
}


export default ListPlaceholder
