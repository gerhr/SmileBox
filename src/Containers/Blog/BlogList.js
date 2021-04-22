import React, { useContext } from "react"
import BlogPost from "Components/BlogPost"
import BlogContext from "./context"
import _keys from "lodash/keys"
import _get from "lodash/get"



export default _ => {
  const {state: posts} = useContext(BlogContext)

  // #TODO add sort

  // #TODO Add filter

  return (
    <>
      { _keys(posts).map( postId => (
          <BlogPost {..._get(posts, postId)} />
        ))
      }
    </>
  )
}
