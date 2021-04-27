import React, {
  useContext,
  useCallback,
  useMemo } from "react"
import BlogPost from "Components/BlogPost"
import BlogContext from "./context"
import _keys from "lodash/keys"
import _get from "lodash/get"
import _pickBy from "lodash/pickBy"
import _sortBy from "lodash/sortBy"
import _reverse from "lodash/reverse"
import ListPlaceholder from "Components/ListPlaceholder"
import { DEFAULT_CATHEGORY } from "./constants"


export default _ => {
  const {
    state: posts,
    onDelete,
    setEditPostId,
    selectedCathegory,
    reverseChronology } = useContext(BlogContext)

  const filteredPost = useMemo(_ => {

    if (selectedCathegory !== DEFAULT_CATHEGORY) {
      const result = _pickBy(posts, post => 
        post.cathegory === selectedCathegory
      )

      return result
    } else {
      return posts
    }
  }, [selectedCathegory, posts])

  const sortedPosts = useMemo(_ => {
      const sortedQueue = _sortBy(_keys(filteredPost), postId => {
          const post = _get(posts, postId)
          return post.lastChangeDate ? post.lastChangeDate : post.publishedDate
        })

      return reverseChronology ? _reverse(sortedQueue) : sortedQueue

  }, [reverseChronology, filteredPost])

  const handleDelete = useCallback(id => _ => {
    onDelete({ id })
  }, [onDelete])

  const handleUpdateClick = useCallback(id => _ => {
    setEditPostId(id)
  }, [setEditPostId])

  return (
    <>
      { sortedPosts.length > 0 ?
        sortedPosts.map( postId => (
          <BlogPost
            onDelete={handleDelete(postId)}
            onEdit={handleUpdateClick(postId)}
            key={`post_${postId}`}
            {..._get(posts, postId)}
          />
        ))
        : <ListPlaceholder />
       }
    </>
  )
}
