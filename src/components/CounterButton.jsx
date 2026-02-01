import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function CounterButton() {
  const { increment } = useContext(CounterContext);

  return <button onClick={increment}>Збільшити лічильник</button>;
}
