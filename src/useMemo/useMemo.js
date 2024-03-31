import React, { useState } from "react";
import SquareComponent from "./squareComponent";

export default function UseMemo() {
  const [state, setState] = useState(false);
  const [number, setNumber] = useState(1);
  
  const handleInput = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <SquareComponent input={number} />
      <button onClick={() => setState(!state)}>
        Change State to Parent Component
      </button>
      <button onClick={handleInput}>Increment Number</button>
    </>
  );
}
