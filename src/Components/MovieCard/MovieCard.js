import React from "react"
import StarRatings from "react-star-ratings"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import _toNumber from "lodash/toNumber"
import Image from "Components/Image"
import useStyles from "./styles"
import { useTheme } from '@material-ui/core/styles'

const MovieCard = ({
  movie
}) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid
        container
        spacing={6}
    >
      <Grid item sm={4}>
        <Image
          className={classes.poster}
          src={movie.Poster}
          alt={movie.Title}
        />
      </Grid>

      <Grid item sm={6}>
        <Box m={3}>
          <Typography variant="h4">
            { movie.Title }
          </Typography>

          <Typography variant="subtitle1">
            { movie.Genre } / { movie.Year }
          </Typography>

          <StarRatings
            rating={_toNumber(movie.imdbRating)}
            starDimension="24px"
            starSpacing="8px"
            starRatedColor={theme.palette.primary.main}
            numberOfStars={10}
            name='rating'
          />
        </Box>

        <Box m={3}>
          <Typography variant="subtitle2">
            Actors: { movie.Actors }
          </Typography>
        </Box>

        <Box m={3}>
          <Typography variant="subtitle2">
            Director: { movie.Director }
          </Typography>
        </Box>

        <Box m={3}>
          <Typography variant="body1">
            { movie.Plot }
          </Typography>
        </Box>
      </Grid>

    </Grid>
  )
}

export default MovieCard
