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

export type StatesMap<
  TState extends StateObject,
  TEvent extends EventObject,
  TEffect extends EffectObject<TState, TEvent>
> = {
  [key in TState["status"]]: StateEffectReducer<
    Extract<TState, { status: key }>,
    TState,
    TEvent,
    TEffect
  >
}

export const stateMachineReducer = <
  TState extends StateObject,
  TEvent extends EventObject,
  TEffect extends EffectObject<TState, TEvent>
>(
  statesMap: StatesMap<TState, TEvent, TEffect>
): StateEffectReducer<TState, TState, TEvent, TEffect> => (state, event, exec): TState =>
  statesMap[state.status](state, event, exec)