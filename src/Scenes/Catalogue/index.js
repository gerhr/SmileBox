import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { HeaderPlug } from "Components/Layout"
import SearchForm, {
  SearchField,
  SearchGrid } from "Containers/SearchForm"
import { Route } from "react-router-dom"


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

        <SearchForm>
          <Grid container spacing={4}>

            <Grid item sm={12}>
              <SearchField />
            </Grid>

            <Grid item sm={12}>
              <SearchGrid />
            </Grid>

          </Grid>
        </SearchForm>
      </>
    )}
  />
)


export default CatalogueRoute
