import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {
    "width": "100%",
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "flex-end",
    "padding": theme.spacing(2, 0)
  },
  control: {
    "padding": theme.spacing(0, 2)
  }
}))


export default useStyles
