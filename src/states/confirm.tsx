import React, { FC, useContext } from "react"
import { StateContext } from "../state-context"
import { StateReducer } from "./state-reducer"

export type ConfirmState = {
  status: "confirm"
  username: string
  password: string
}
export const confirm: StateReducer<ConfirmState> = (state, event, exec) => {
  switch (event.type) {
    case "confirm":
      exec({
        type: "submitData",
        username: state.username,
        password: state.password,
      })
      return {
        ...state,
        status: "submitting",
      }
    default:
      return state
  }
}

export const ConfirmComponent: FC<{ state: ConfirmState }> = ({ state }) => {
  const { dispatch } = useContext(StateContext)
  return (
    <div>
      <h2>Are you sure you want to register</h2>
      <p>Username: {state.username}</p>
      <p>Password: ...</p>
      <button onClick={() => dispatch({ type: "confirm" })}>Confirm</button>
    </div>
  )
}
