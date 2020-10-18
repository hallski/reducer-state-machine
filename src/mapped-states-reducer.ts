import { EffectObject, EffectReducerExec, EventObject } from "use-effect-reducer"

export type StateObject = { status: string}

export type StateEffectReducer<
  TInState extends StateObject,
  TOutState extends StateObject,
  TEvent extends EventObject,
  TEffect extends EffectObject<TInState, TEvent>
> = (
  state: TInState,
  event: TEvent,
  exec: EffectReducerExec<TInState, TEvent, TEffect>
) => TOutState

export type State<TInState extends StateObject,
TOutState extends StateObject,
TEvent extends EventObject,
TEffect extends EffectObject<TInState, TEvent>> = {
  entry?: (state: TInState, exec: EffectReducerExec<TInState, TEvent, TEffect>) => void,
  exit?: (state: TInState, exec: EffectReducerExec<TInState, TEvent, TEffect>) => void,
  reducer: StateEffectReducer<TInState, TOutState, TEvent, TEffect>
}

export type StatesMap<
  TState extends StateObject,
  TEvent extends EventObject,
  TEffect extends EffectObject<TState, TEvent>
> = {
  [key in TState["status"]]: State<Extract<TState, { status: key}>, TState, TEvent, TEffect>
}

export const stateMachineReducer = <
  TState extends StateObject,
  TEvent extends EventObject,
  TEffect extends EffectObject<TState, TEvent>
>(
  statesMap: StatesMap<TState, TEvent, TEffect>,
): StateEffectReducer<TState, TState, TEvent, TEffect> => {

  return (state, event, exec): TState => {
    const current = statesMap[state.status]
    const newState = current.reducer(state, event, exec)
    if (state.status !== newState.status) {
      const next = statesMap[newState.status]
       current.exit && current.exit(state, exec)
       next.entry && next.entry(newState, exec)
    }

    return newState
  }
}
