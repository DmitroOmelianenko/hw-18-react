import React, { createContext, useRef, useState } from "react";

export const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const increment = () => {
    countRef.current += 1; // ref — як кеш / історія
    setCount(countRef.current); // state — для UI
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}
