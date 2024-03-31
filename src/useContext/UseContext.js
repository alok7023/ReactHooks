import React, { useState } from "react";

import ParentComponent from "./ParentComponent";
import { CountContext } from "./CountContext";

export default function UseContext() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <ParentComponent />
      </CountContext.Provider>
    </div>
  );
}
