import React, {
  useContext,
  useCallback } from "react"
import EditForm from "Components/EditForm"
import _get from "lodash/get"
import BlogContext from "./context"
import { CATHEGORIES } from "./constants"


const NewPostForm = _ => {
  const {
    onCreate,
    onUpdate,
    editPostId,
    state,
    setEditPostId } = useContext(BlogContext)

  const handleClose = useCallback(_ => {
    setEditPostId(_ => null)
  },[setEditPostId])

  const editablePost = editPostId !== null ? _get(state, editPostId) : {}

  const handleSave = useCallback(payload => {
    if (editPostId) {
      onUpdate({
        id: editPostId,
        ...payload
      })
    } else {
      onCreate(payload)
    }

    handleClose()
  },[onUpdate, onCreate, editPostId, handleClose])

  return (
    <EditForm
        open={editPostId !== null}
        onClose={handleClose}
        onSave={handleSave}
        cathegories={CATHEGORIES}
        {...editablePost}
    />
  )
}


export default NewPostForm
