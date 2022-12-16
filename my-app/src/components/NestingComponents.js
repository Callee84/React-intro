import React, { Component } from 'react'

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }

  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data loaded!' : 'Loading data....'}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
            <ol>
                <li>Confirm your Email</li>
                <li>Complete your profile</li>
                <li>Subsribe to the newsletter</li>
            </ol>
            </div>
        ) : 
        (<p>Please sign in</p>)}
      </div>
    )
  }
}

export default NestingComponents