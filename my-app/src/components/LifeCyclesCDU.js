import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {
    constructor(props){

        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }

    updateGreeting = () => {
        this.setState.prevState => {
            return {
                greeting:prevState.greeting === 'Hello' +
            }
        }
    }

    render() {
        return (
        <div>{this.state.greeting}</div>
        )
    }
}

export default LifeCyclesCDU