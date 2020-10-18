import { AppState } from ".";
import { State, StateEffectReducer, StateObject } from "../mapped-states-reducer";
import { AppEffect, AppEvent } from "../types";

export type StateReducer<TState extends StateObject> = StateEffectReducer<
  TState,
  AppState,
  AppEvent,
  AppEffect
>

export type SubState<TState extends StateObject = AppState> = State<
TState,
AppState, AppEvent, AppEffect>
