import React, { FC } from "react"
import { useEffectReducer } from "use-effect-reducer"
import "./App.css"
import { stateMachineReducer } from "./mapped-states-reducer"
import { StateContext } from "./state-context"
import { AppState, states } from "./states"
import { ConfirmComponent } from "./states/confirm"
import { FailedComponent } from "./states/failed"
import { FinishedComponent } from "./states/finished"
import { FormComponent } from "./states/show-form"
import { SubmittingComponent } from "./states/submitting"
import { AppEffect, AppEvent } from "./types"

const reducer = stateMachineReducer(states)

export const App: FC<{}> = () => {
  const [state, dispatch] = useEffectReducer<AppState, AppEvent, AppEffect>(
    reducer,
    { status: "showForm" },
    {
      submitData: (_state, _effect, dispatch) => {
        setTimeout(() => {
          dispatch({
            type: "success",
          })
        }, 2000)
      },
      log: (_state, effect, _dispatch) => {
        console.log(effect.message)
      },
    }
  )

  return (
    <StateContext.Provider value={{ dispatch }}>
      {state.status === "showForm" && <FormComponent state={state} />}
      {state.status === "confirm" && <ConfirmComponent state={state} />}
      {state.status === "submitting" && <SubmittingComponent state={state} />}
      {state.status === "finished" && <FinishedComponent state={state} />}
      {state.status === "failed" && <FailedComponent state={state} />}
    </StateContext.Provider>
  )
}
