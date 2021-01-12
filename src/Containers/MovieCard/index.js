import React, {
  useEffect,
  useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import MovieCard from "Components/MovieCard"


const {
  REACT_APP_API_URL,
  REACT_APP_API_KEY } = process.env


const MovieCardContainer = () => {
  const [movie, setMovie] = useState(null)
  const { movieId }  = useParams()

  useEffect(() => {
    axios({
      baseURL: REACT_APP_API_URL,
      params: {
        apikey: REACT_APP_API_KEY,
        i: movieId
      }
    })
    .then(res => {
      setMovie(_ => res.data)
    })
    .catch(err => {
      // #TEMP
      console.log("👁", err)
    })

  }, [movieId])


  return (
    <>
      { movie ?
        <MovieCard movie={movie} />
      : "No movie"
      }
    </>
  )
}


export default MovieCardContainer
