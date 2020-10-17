import React from "react"
import { FC } from "react"
import { StateReducer } from "./state-reducer"

export type FinishedState = { status: "finished"; username: string }
export const finished: StateReducer<FinishedState> = (state, _event, _exec) => {
  // Final state
  return state
}

export const FinishedComponent: FC<{ state: FinishedState }> = ({ state }) => {
  return (
    <div>
      <h2>You're now registered {state.username}</h2>
    </div>
  )
}
