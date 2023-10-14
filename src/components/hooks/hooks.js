import React, { useState } from "react";


export function Hook(){
    const[count,setCount]=useState(0)  
    return(
        <>
        <div className="text-center mt-5">
        <div>{count}</div><br/>
        
        <button onClick={()=>setCount(count+1)}>Add</button>
        <button onClick={()=>setCount(count-1)}>Sub</button>
        <button onClick={()=>setCount(count*0)}>Reset</button>
        </div>
        </>
    )
}