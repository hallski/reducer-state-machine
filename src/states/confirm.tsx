import React, { FC, useContext } from "react"
import { StateContext } from "../state-context"
import { SubState } from "./state-reducer"

export type ConfirmState = {
  status: "confirm"
  username: string
  password: string
}

export const confirm: SubState<ConfirmState> = {
  reducer: (state, event, _exec) => {
    switch (event.type) {
      case "confirm":
        return {
          ...state,
          status: "submitting",
        }
      default:
        return state
    }
  },
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
