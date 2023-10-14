import { useState } from "react"

function HOC(){
    const [count,setCount] =useState(0)
    return(
         <>
         <h1>HOC</h1>
         <h2><span>Defination</span>: In React, a Higher-Order Component (HOC) is a design pattern used for reusing component logic. A Higher-Order Component is not a component itself but a function that takes one or more components as input and returns a new component with enhanced functionality. HOCs are a way to share behavior among components without repeating code and are commonly used for tasks like data fetching, state management, and rendering logic.</h2>
         <h2>Count : {count}</h2>
         <button onClick={()=>setCount(count + 1)}>Increament</button>
         <button onClick={()=>setCount(count - 1)}>Decreament</button>
         
         </>
    )
}
export default HOC