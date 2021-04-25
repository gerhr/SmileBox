import React, {
  useContext } from "react"
import EditForm from "Components/EditForm"
import BlogContext from "./context"
import { CATHEGORIES } from "./constants"


const NewPostForm = _ => {
  const { onCreate } = useContext(BlogContext)

  return (
    <EditForm
      onSave={onCreate}
      cathegories={CATHEGORIES}
    />
  )
}


export default NewPostForm
