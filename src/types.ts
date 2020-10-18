export type AppEffect =
  | { type: "submitData"; username: string; password: string }
  | { type: "log", message: string}

export type AppEvent =
  | { type: "submit"; username: string; password: string }
  | { type: "confirm" }
  | { type: "success" }
  | { type: "cancel" }
  | { type: "tryAgain" }
  | { type: "error"; error: Error }
  | { type: "stmEntry" }
  | { type: "stmExit" }
