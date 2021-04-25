import React, {
  useCallback } from "react"
import faker from "faker"
import createPersistedReducer from "use-persisted-reducer"
import BlogContext from "./context"
import uniqid from "uniqid"
import {
  CREATE,
  UPDATE,
  DELETE } from "./constants"
import initialState from "./initialState"


const usePersistedReducer = createPersistedReducer('state');


const blogReducer = (state, { type, payload }) => {
    switch (type) {

      case CREATE:

        return {
          ...state,
          [uniqid()]: {
            publishedDate: Date.now(),
            author: faker.internet.userName(),
            lastChangeDate: null,
            header: payload.header,
            cathegory: payload.cathegory,
            body: payload.body
          }
        };

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

  const [state, dispatch] = usePersistedReducer(blogReducer, initialState)

  // #TODO Create Faux user
  // #TODO Create Filter options
  // #TODO Create Order function

  const createPost = useCallback(({
    header,
    body,
    cathegory
  }) => {
    dispatch({
      type: CREATE,
      payload: {
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
