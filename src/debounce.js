import React, { useState, useEffect } from "react";

export default function Debounce() {
  const [data, setData] = useState();

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(data);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [data]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <h1>Implement Debounce</h1>
      <input type="text" value={data} onChange={handleChange} />
    </>
  );
}
