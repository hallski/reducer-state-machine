import React from "react"
import { FC, useContext } from "react"
import { StateContext } from "../state-context"
import { AppStateHandler } from "./app-state-handler"

export type FailedState = { status: "failed"; message: string }

export const failed: AppStateHandler<FailedState> = {
  reducer: (state, event, _exec) => {
    switch (event.type) {
      case "tryAgain":
        return {
          status: "showForm",
        }
      default:
        return state
    }
  },
}

export const FailedComponent: FC<{ state: FailedState }> = ({ state }) => {
  const { dispatch } = useContext(StateContext)
  return (
    <div>
      <h2>Oops, it looks like something went wrong</h2>
      <p>{state.message}</p>
      <button onClick={() => dispatch({ type: "tryAgain" })}>Try again</button>
    </div>
  )
}
