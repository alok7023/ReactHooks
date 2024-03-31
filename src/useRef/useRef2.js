import React, {useRef} from "react"

export default function UseRef2(){
    const inputFocus = useRef(false);
    const handleClick = () => {
        inputFocus.current.focus();
    }
    return(
        <div>
            <h1>UseRef Example 2</h1>
            <input ref={inputFocus}/>
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}