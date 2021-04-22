import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { HeaderPlug } from "Components/Layout"
import { Route } from "react-router-dom"
import Blog, { BlogList } from "Containers/Blog"


const CatalogueRoute = ({ path }) => (
  <Route
    path={path}
    render={_ => (
      <>
        <HeaderPlug>
          <Typography variant="h5">
            Catalogue
          </Typography>
        </ HeaderPlug>

        <Grid item sm={12}>
          <BlogList />
        </Grid>
      </>
    )}
  />
)


export default CatalogueRoute
