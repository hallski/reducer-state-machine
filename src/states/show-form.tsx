import React, { FC, useContext, useState } from "react"
import { StateContext } from "../state-context"
import { SubState } from "./state-reducer"

export type ShowFormState = { status: "showForm" }

export const showForm: SubState<ShowFormState> = {
  reducer: (state, event, _exec) => {
    switch (event.type) {
      case "submit":
        return {
          status: "confirm",
          username: event.username,
          password: event.password,
        }
      default:
        return state
    }
  },
}

export const FormComponent: FC<{ state: ShowFormState }> = ({ state }) => {
  const { dispatch } = useContext(StateContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = () => {
    if (username !== "" && password !== "") {
      dispatch({ type: "submit", username, password })
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form>
        <p>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </p>
      </form>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}
