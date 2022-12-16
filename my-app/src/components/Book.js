import React from 'react'

function Book(props) {
    const book = props.book
  return (
    <div>
        <h5>{book.title} {props.key}</h5>
        <p>{book.author}</p>
        <p>{book.pages}</p>
    </div>
  )
}

export default Book