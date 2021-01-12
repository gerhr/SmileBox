import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {
    "display": "flex",
    "flex-wrap": "wrap",
    "justify-content": "space-around",
    "overflow": "hidden",
    "background-color": theme.palette.background.paper,
  },
  gridList: {
    "width": "100%"
  },
  gridTile: {
    "cursor": "pointer"
  }
}))


export default useStyles
