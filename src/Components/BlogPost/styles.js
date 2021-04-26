import { makeStyles } from "@material-ui/core/styles"



const useStyles = makeStyles(theme => ({
  root: {
    "padding": theme.spacing(3, 2, 5, 2)
  },
  bar: {
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center"
  },
  date: {
    "color": theme.palette.secondary.light,
    "padding-left": theme.spacing(1)
  },
  header: {
    padding: theme.spacing(2, 0)
  },
  userProfile: {
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "flex-start",
    "align-items": "center",
    "padding": theme.spacing(2, 0, 3, 0)
  },
  body: {
    "padding-bottom": theme.spacing(3)
  },
  userName: {
    "padding-left": theme.spacing(3)
  },
  toolbar: {
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "flex-end",
    "padding": theme.spacing(2, 0, 3, 0)
  },
  tool: {
    "margin-left": theme.spacing(2)
  }
}))


export default useStyles