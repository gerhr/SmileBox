import React from "react"
import Grid from "@material-ui/core/Grid"
import { HeaderPlug } from "Components/Layout"
import MovieCard from "Containers/MovieCard"
import { Route } from "react-router-dom"


const MovieRoute = ({ path }) => (
  <Route
    path={`${path}/:movieId`}
    render={({ match: { path } }) => (
      <>
        <HeaderPlug>
          Movie
        </ HeaderPlug>

        <Grid item sm={12}>
          <MovieCard />
        </Grid>
      </>
    )}
  />
)


export default MovieRoute
