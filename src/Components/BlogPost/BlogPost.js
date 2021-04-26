import React, {
  useState } from "react"
import Box from "@material-ui/core/Box"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import prettyMs from "pretty-ms"
import useStyles from "./styles"
import Chip from "@material-ui/core/Chip"


export default ({
  header,
  author,
  cathegory,
  lastChangeDate,
  body,
  publishedDate,
  onEdit,
  onDelete
}) => {
  const classes = useStyles()

  const [deletePromptOpen, setDeletePromptOpen] = useState()

  return (
    <Box className={classes.root}>

      <Box className={classes.bar}>
        <Box className={classes.userProfile}>
          <Avatar>{author[0]}</Avatar>

          <Typography className={classes.userName} variant="subtitle">{author}</Typography>

          <Typography className={classes.date} variant="body2">{prettyMs(publishedDate)}</Typography>
        </Box>

        { cathegory &&
          <Box className>
            <Chip label={cathegory}/>
          </Box>
        }
      </Box>


      <Typography className={classes.header} variant="h4">{header}</Typography>

      { lastChangeDate &&
        <Typography variant="body2">{prettyMs(lastChangeDate)}</Typography>
      }

      <Box className={classes.body}>
        <Typography variant="body1">
          { body }
        </Typography>
      </Box>

      <Divider />

      <Box className={classes.toolbar}>
        <Button
            className={classes.tool}
            onClick={onDelete}
        >
          Delete
        </Button>

{/*         <Button
            className={classes.tool}
            variant="contained"
            onClick={onEdit}
            // onClick={_ => { setDeletePromptOpen(_ => true) }}
        >
          Edit
        </Button> */}
      </Box>

    </Box>
  )
}
