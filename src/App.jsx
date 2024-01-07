import React,{useState} from "react";

export const App =()=>{
    const [count, setCount] = useState(0);
return (
    <React.Fragment>
        <h1>Hello world </h1>
        <div>{count}</div>
        <button onClick={()=> setCount((prev) => prev + 1)}></button>
    </React.Fragment>
)
}