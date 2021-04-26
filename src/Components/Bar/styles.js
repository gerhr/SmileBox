import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {
    "width": "100%",
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "flex-end",
    "padding": theme.spacing(2, 0),
    "align-items": "center"
  },
  control: {
    "margin": theme.spacing(0, 3)
  }
}))


export default useStyles
