import React, {
  useCallback,
  useState } from "react"
import faker from "faker"
import createPersistedReducer from "use-persisted-reducer"
import BlogContext from "./context"
import uniqid from "uniqid"
import _remove from "lodash/remove"
import _keys from "lodash/keys"
import _pick from "lodash/pick"
import _get from "lodash/get"
import {
  CREATE,
  UPDATE,
  DELETE,
  DEFAULT_CATHEGORY } from "./constants"
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

        return {
          ...state,
          [payload.id]: {
            ..._get(state, payload.id),
            header: payload.header,
            body: payload.body,
            cathegory: payload.cathegory,
            lastChangeDate: Date.now()
          }
        }

      case DELETE:
        const shiftedPosts = _remove(_keys(state), n => n !== payload.id)

        const result = _pick(state, shiftedPosts)

        return result

      default:
        throw new Error();
    }
}


export default ({ children }) => {

  const [state, dispatch] = usePersistedReducer(blogReducer, initialState)

  const [editPostId, setEditPostId] = useState(null)

  const [selectedCathegory, setSelectedCathegory] = useState(DEFAULT_CATHEGORY)

  const [reverseChronology, setReverseChronology] = useState(false)

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
        state,
        onCreate: createPost,
        onDelete: deletePost,
        onUpdate: updatePost,
        editPostId,
        setEditPostId,
        selectedCathegory,
        setSelectedCathegory,
        reverseChronology,
        setReverseChronology
      }}
    >
      { children }
    </BlogContext.Provider>
  )
}
