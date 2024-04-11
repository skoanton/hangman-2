import React, { createContext } from "react";
import { Action, WordState, initalWordState } from "./Provider";

export const WordContext = createContext<{
  state: WordState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initalWordState,
  dispatch: () => null,
});
