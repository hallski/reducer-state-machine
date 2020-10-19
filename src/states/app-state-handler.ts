import { AppState } from ".";
import { StateHandler, StateObject } from "../mapped-states-reducer";
import { AppEffect, AppEvent } from "../types";

export type AppStateHandler<TState extends StateObject = AppState> = StateHandler<
TState,
AppState, AppEvent, AppEffect>
