import React from "react"
import { FC } from "react"
import { AppStateHandler } from "./app-state-handler"

export type FinishedState = { status: "finished"; username: string }
export const finished: AppStateHandler<FinishedState> = {
  reducer: (state, _event, _exec) => {
    // Final state
    return state
  },
}

export const FinishedComponent: FC<{ state: FinishedState }> = ({ state }) => {
  return (
    <div>
      <h2>You're now registered {state.username}</h2>
    </div>
  )
}
