import React, {useContext} from "react";
import {CountContext} from "./CountContext"
export default function GrandChildComponent(){
    const {count, setCount} = useContext(CountContext);
    return(
        <>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count+1)}>Increment</button>
        </>
    )
}