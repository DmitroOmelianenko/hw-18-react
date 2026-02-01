import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return <h2>Значення: {count}</h2>;
}
