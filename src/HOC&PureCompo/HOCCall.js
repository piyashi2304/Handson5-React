import React from "react";

function HOCCall(props){
    return(
        <>
        <h6 style={{backgroundColor :'red'}}>{<props.value />}</h6>
        
        </>
    )
}
export default HOCCall

function HOCCallblue(props){
    return(
        <>
        <h6 style={{backgroundColor :'blue'}}>{<props.value />}</h6>
        <h3><span>Explanation</span>:To summarize this code the HOC component initializes a state variable count using useState and sets the initial value to 0.It displays the current count using  h3 element.It renders two buttons Increment and Decrement which allow to increase or decrease the count when clicked. This is achieved by calling the setCount function with updated values based on the current count.HOCCall component passing the HOC component as a prop called value. This means that the HOCCall component can access and potentially enhance the functionality of the HOC component. Similarly the HOCCallblue component passing the HOC component as a prop called value. This component appears to be another Higher Order Component, potentially with different styling or behavior compared to HOCCall.</h3>
        </>
    )
}
export  {HOCCallblue}

