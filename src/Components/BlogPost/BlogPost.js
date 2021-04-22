import React from "react"
import Box from "@material-ui/core/Box"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import hrt from "human-readable-time"
import useStyles from "./styles"
import Chip from "@material-ui/core/Chip"


export default ({
  header,
  author,
  cathegory,
  lastChangeDate,
  body,
  publishedDate
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>

      <Box className={classes.bar}>
        <Box className={classes.userProfile}>
          <Avatar>{author[0]}</Avatar>

          <Typography className={classes.userName} variant="subtitle">{author}</Typography>

          <Typography className={classes.date} variant="body2">{hrt(publishedDate)}</Typography>
        </Box>

        <Box className>
          <Chip label={cathegory}/>
        </Box>
      </Box>


      <Typography className={classes.header} variant="h4">{header}</Typography>

      { lastChangeDate &&
        <Typography variant="body2">{hrt(lastChangeDate)}</Typography>
      }

      <Box className={classes.body}>
        <Typography variant="body1">
          { body }
        </Typography>
      </Box>

      <Divider />

      <Box className={classes.toolbar}>
        tools
      </Box>

    </Box>
  )
}
