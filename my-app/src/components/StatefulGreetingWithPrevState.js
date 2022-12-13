import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            setCount: 0
        };
    }

    handelClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous state', prevState)
            console.log('Previous props', prevProps)
            return {
            introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit", 
            }
    }) 
        
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State', prevState)
            console.log('Previous Props', prevProps)
            return {
                setCount: prevState.setCount + 1
            }
        })
    }

    render() {
        return ( 
        <div>
        <h1>{this.state.introduction}</h1>
        <button onClick={() => this.handelClick()}>{this.state.buttonText}</button>
        <br></br>
        <button onClick={() => this.increment()}>Count</button>
        <p>You've clicked {this.state.setCount} times</p>
        </div>
        )
    }
}

export default StatefulGreetingWithPrevState;