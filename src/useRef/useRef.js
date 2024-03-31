
import React, {useRef} from "react"

export default function UseRef(){
    const countRef = useRef(0);
    const handleClick = () => {
        countRef.current++;
        console.log(countRef.current);
    }
    return (
        <div>
            <h1>UseRef Example</h1>
            <p>{countRef.current}</p>
            <button onClick={handleClick}>Click Me!!</button>
        </div>
    )
}