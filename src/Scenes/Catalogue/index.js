import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { HeaderPlug } from "Components/Layout"
import { Route } from "react-router-dom"
import Bar from "Components/Bar"
import { BlogList,
  FilterControl,
  SortControl } from "Containers/Blog"


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

        <Grid container>
          <Grid item sm={12}>
            <Bar>
              <SortControl />

              <FilterControl />
            </Bar>
          </Grid>
        </Grid>

        <Grid item sm={12}>
          <BlogList />
        </Grid>
      </>
    )}
  />
)


export default CatalogueRoute
