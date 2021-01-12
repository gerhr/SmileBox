import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
    root: {
      "min-height": "400px",
      "height": "100"
    },
    appbar: {
      "padding": theme.spacing(3, 5),
      "display": "flex",
      "flex-direction": "row",
      "align-items": "center"
    },
    logo: {
      "width": theme.spacing(5),
      "height": theme.spacing(5),
    },
    title: {
      "padding": theme.spacing(0, 2),
      "flex": "1"
    },
    main: {
      "padding": theme.spacing(5),
      "background-color": theme.palette.default,
      "min-height": "100vh",

    },
    footer: {
      "padding": theme.spacing(5),
      "background-color": theme.palette.grey[50],
      "color": theme.palette.text.secondary
    }
  })
)


export default useStyles
