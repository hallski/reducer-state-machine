import React from "react"
import { FC, useContext } from "react"
import { StateContext } from "../state-context"
import { StateReducer } from "./state-reducer"

export type SubmittingState = {
  status: "submitting"
  username: string
  password: string
}

export const submitting: StateReducer<SubmittingState> = (
  state,
  event,
  exec
) => {
  switch (event.type) {
    case "cancel":
      return { status: "showForm" }
    case "success":
      return { status: "finished", username: state.username }
    case "error":
      return {
        status: "failed",
        message: event.error.message,
      }
    default:
      return state
  }
}

export const SubmittingComponent: FC<{ state: SubmittingState }> = () => {
  const { dispatch } = useContext(StateContext)
  return (
    <div>
      <h2>Submitting...</h2>
      <button onClick={() => dispatch({ type: "cancel" })}>Cancel</button>
    </div>
  )
}
