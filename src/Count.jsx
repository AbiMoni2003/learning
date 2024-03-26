import { useState } from "react";

function Count(){

    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }

    const reset=()=>{
        setCount(0);
    }

    const decrement=()=>{
        setCount(count-1);
    }
    return(<div className="count-main">
        <p className="count-value">{count}</p>
        <button onClick={increment} className="count-button">Increment</button>
        <button onClick={reset} className="count-button">Reset</button>
        <button onClick={decrement} className="count-button">Decrement</button>
    </div>);
}
export default Count;