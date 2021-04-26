import React, {
  useContext,
  useCallback } from "react"
import BlogPost from "Components/BlogPost"
import BlogContext from "./context"
import Box from "@material-ui/core/Box"
import _keys from "lodash/keys"
import _get from "lodash/get"
import { Typography } from "@material-ui/core"


export default _ => {
  const {
    state: posts,
    onDelete,
    setEditPostId } = useContext(BlogContext)

  // #TODO add sort
  // #TODO Add filter

  const handleDelete = useCallback(id => _ => {
    onDelete({ id })
  }, [onDelete])

  const handleUpdateClick = useCallback(id => _ => {
    setEditPostId(id)
  }, [setEditPostId])

  return (
    <>
      { _keys(posts).length > 0 ?
        _keys(posts).map( postId => (
          <BlogPost
            onDelete={handleDelete(postId)}
            onEdit={handleUpdateClick(postId)}
            key={`post_${postId}`}
            {..._get(posts, postId)}
          />
        ))
        : <Box>
            <Typography>Start with first post</Typography>
          </Box>
       }
    </>
  )
}
