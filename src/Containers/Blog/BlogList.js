import React, {
  useContext,
  useCallback,
  useMemo } from "react"
import BlogPost from "Components/BlogPost"
import BlogContext from "./context"
import Box from "@material-ui/core/Box"
import _keys from "lodash/keys"
import _get from "lodash/get"
import _pickBy from "lodash/pickBy"
import { Typography } from "@material-ui/core"


export default _ => {
  const {
    state: posts,
    onDelete,
    setEditPostId,
    selectedCathegory } = useContext(BlogContext)

  const filteredPost = useMemo(_ => {

    if (selectedCathegory !== "all") {
      console.log(selectedCathegory)

      const result = _pickBy(posts, post => 
        post.cathegory === selectedCathegory
      )

      console.log(result)

      return result
    } else {
      return posts
    }
  }, [selectedCathegory, posts])

  const handleDelete = useCallback(id => _ => {
    onDelete({ id })
  }, [onDelete])

  const handleUpdateClick = useCallback(id => _ => {
    setEditPostId(id)
  }, [setEditPostId])

  return (
    <>
      { _keys(filteredPost).length > 0 ?
        _keys(filteredPost).map( postId => (
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
