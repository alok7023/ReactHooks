import React, { useContext } from "react";
import { CountContext } from "./CountContext";
import GrandChildComponent from "./GrandChildComponent";
export default function ChildComponent() {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <GrandChildComponent />
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
