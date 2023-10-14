import React, { PureComponent } from "react"
class PureCompo extends PureComponent{
    constructor(){
        super()
        this.state ={
            count: 0
        }
    }
    render(){
        console.log("This is Render Method...")
        return(
            <>
            <h1>Pure Component</h1>
            <h2><span>Defination</span>: A pure component is a class component that has a special optimizing feature known as "Shallow prop and state comparision." Pure component are used to improve the performance of react application by reducing unnecessary rerender.</h2>
            <h2>Count Value : {this.state.count}</h2>
            <button onClick={()=>this.setState({count:5})}>Change Value</button>
            <h3><span>Explanation</span>: To summarize, this code defines a React component called PureCompo that demonstrates the use of PureComponent for optimizing rendering by performing a shallow comparison of props and state. The component has a button that, when clicked, updates the count value in its state.</h3>
            </>
        )
    }
}
export default PureCompo