import React, { createContext, useReducer } from "react";
export const CounterContext = createContext(null);

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "INCREMENT" });

  return (
    <CounterContext.Provider value={{ count: state.count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}
