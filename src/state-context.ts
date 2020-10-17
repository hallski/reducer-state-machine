import { createContext, Dispatch } from "react"
import { AppEvent } from "./types"

type StateContextValue = {
  dispatch: Dispatch<AppEvent>
}

export const StateContext = createContext<StateContextValue>({
  dispatch: () => {},
})