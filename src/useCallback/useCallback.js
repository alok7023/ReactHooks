import React, { useState, useCallback } from "react";
import SquareComponent from "./SquareComponent";


export default function UseCallback() {
    const [state, setState] = useState(false);
    const [number, setNumber] = useState(1);
    
    const handleInput = useCallback(() => {
      setNumber(number + 1);
    },[number]);
    return (
      <>
        <SquareComponent handler={handleInput} input={number} />
        <button onClick={() => setState(!state)}>
          Change State to Parent Component
        </button>
      </>
    );
  }