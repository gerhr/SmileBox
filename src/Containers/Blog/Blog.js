import React, {
  useCallback,
  useReducer } from "react"
import createPersistedReducer from "use-persisted-reducer"
import BlogContext from "./context"
import {
  CREATE,
  UPDATE,
  DELETE } from "./constants"
import initialState from "./initialState"


const usePersistedReducer = createPersistedReducer('state');


const blogReducer = (action, state) => {
    switch (action.type) {

      case CREATE:
        // #TODO Generate new id
        // #TODO Push data to storage
        console.log("create post")
        return state;

      case UPDATE:
        // #TODO Pick post by id
        // Merge and update post

        console.log("update post")
        return state

      case DELETE:
        // #TODO Pick post by ID
        // #TODO Delete it

        console.log("delete post")
        return state

      default:
        throw new Error();
    }
}


export default ({ children }) => {

  // const [state, dispatch] = usePersistedReducer(blogReducer, initialState)

  const [state, dispatch] = useReducer(blogReducer, initialState)

  // #TODO Create Faux user
  
  // #TODO Create Filter options
  // #TODO Create order function


  // #TODO Pass data
  const createPost = useCallback(({
    header,
    body,
    cathegory
  }) => {
    dispatch({
      type: CREATE,
      payload: {
        publishedDate: "", // #TODO Pass date here
        header,
        body,
        cathegory
      }
    })
  }, [])

  const deletePost = useCallback(({
      id
    }) => {
      dispatch({
        type: DELETE,
        payload: {
          id
        }
      })
    }, [])

  const updatePost = useCallback((payload) => {
    dispatch({
      type: UPDATE,
      payload
/*
      payload: {
        id,
        header,
        body,
        cathegory
      }
*/
    })
  }, [])


  return (
    <BlogContext.Provider
      value={{
        onCreate: createPost,
        onDelete: deletePost,
        onUpdate: updatePost,
        state
      }}
    >
      { children }
    </BlogContext.Provider>
  )
}
