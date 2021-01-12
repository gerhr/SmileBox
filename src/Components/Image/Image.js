import React, {
  useEffect,
  useState,
  useCallback } from "react"
import placeholderImage from "./images/placeholder.svg"


const Image = ({ src, ...otherProps }) => {
  const [_src, _setSrc] = useState(src)

  useEffect(_ => {
    _setSrc(src)
  }, [src])

  const handleError = useCallback(_ => {_setSrc(placeholderImage)}, [])

  return (
    <img
        draggable="false"
        src={_src}
        alt={otherProps.alt}
        onError={handleError}
        {...otherProps}
    />
  )
}


export default Image
