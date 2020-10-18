import { StatesMap } from "../mapped-states-reducer"
import { AppEffect, AppEvent } from "../types"
import { ConfirmState, confirm } from "./confirm"
import { FailedState, failed } from "./failed"
import { FinishedState, finished } from "./finished"
import { ShowFormState, showForm } from "./show-form"
import { SubmittingState, submitting } from "./submitting"

export type AppState =
  | ShowFormState
  | ConfirmState
  | SubmittingState
  | FinishedState
  | FailedState

export const states: StatesMap<AppState, AppEvent, AppEffect> = {
  showForm,
  confirm,
  submitting,
  finished,
  failed,
}
