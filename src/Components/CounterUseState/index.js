import React,{useState} from "react";
import "./style.css";

const UseStateHook = () =>{
    const [count, setCount] = useState(0);
    const handlechangeincrease = ()=>{
        setCount(count+1);
    }
    const handlechangedecrease = () =>{
        if(count===0){
            setCount(0)
        }else{

            setCount(count-1);
        }
    }
    return(
        <div className="main-container">
            <button onClick={handlechangeincrease} className="btn">+</button>
            <h1>{count}</h1>
            <button onClick={handlechangedecrease} className="btn">-</button>
        </div>
    )
}
export default UseStateHook;