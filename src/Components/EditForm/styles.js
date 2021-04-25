import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  modal: {},
  body: {
    "outline": 0,
    "top": "42%",
    "left": "50%",
    "min-height": "400px",
    "transform": "translate(-42%, -50%)",
    "position": "absolute",
    "width": "400px",
    "background-color": theme.palette.background.paper,
    "box-shadow": theme.shadows[5],
    "padding": theme.spacing(2, 4, 3)
  },
  row: {
    "width": "100%",
    "padding": theme.spacing(1, 0, 1, 0)
  },
  field: {
    "width": "100%"
  },
  toolbar: {
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "flex-end"
  }
}))


export default useStyles
