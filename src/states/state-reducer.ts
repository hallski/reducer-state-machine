import { AppState } from ".";
import { StateEffectReducer, StateObject } from "../mapped-states-reducer";
import { AppEffect, AppEvent } from "../types";

export type StateReducer<TState extends StateObject> = StateEffectReducer<
  TState,
  AppState,
  AppEvent,
  AppEffect
>