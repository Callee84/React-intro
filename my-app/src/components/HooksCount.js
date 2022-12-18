import React, {useState} from 'react'

export default function HooksCount() {
    const [count, setCount] = useState(0);

    return (
    <div>
        <h1>
            Hello{props.name}!
            I'm a functional component with hooks!
        </h1>
        <h2>You've clicked {count} times.</h2>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Count
        </button>
    </div>
  )
}
