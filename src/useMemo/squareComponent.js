import React, { useMemo } from "react";

function SquareComponent({ input }) {
  const square = (val) => {
    console.log(val);
    return val * val;
  };
  console.log("component Re-render");
// const squareValue = square(input);
  const squareValue = useMemo(() => square(input), [input]);
  return (
    <>
      <h1>Sqaure Function</h1>
      <h1>{squareValue}</h1>
    </>
  );
}

// export default SquareComponent;
export default React.memo(SquareComponent);
