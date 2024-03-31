import React from "react";

function SquareComponent({ input,handler }) {
  const square = (num) => {
    console.log(num);
    return num * num;
  };
  console.log("Square component, Re-render");
  return (
    <>
      <h1>{square(input)}</h1>
      <button onClick={handler}>Increment</button>
    </>
  );
}

// export default SquareComponent;
export default React.memo(SquareComponent);