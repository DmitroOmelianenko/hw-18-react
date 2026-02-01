import React from "react";
import { CounterProvider } from "./components/CounterContext";
import CounterButton from "./components/CounterButton";
import CounterDisplay from "./components/CounterDisplay";
import "./styles.css";

export default function App() {
  return (
    <CounterProvider>
      <div className="app">
        <h1>useRef + Context</h1>
        <CounterDisplay />
        <CounterButton />
      </div>
    </CounterProvider>
  );
}
