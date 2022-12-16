import React from 'react'
import Book from './Book'

function RenderingList() {
    const booklist = [
        'To kill a mockingbird',
        'The Great Gatsby',
        'The Concorde'
    ]

    const books = [
        {
            title: 'To kill a mockingbird',
            author: 'Harper Lee',
            pages: 281
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott. Fitzgerald',
            pages: 218
        },
        {
            title: 'The Concorde',
            author: ' J. D. Salinger',
            pages: 234
        }
    ]

  return (
    <div>
        {booklist.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            books.map(book => {
                return (
                    <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
            })
        }
        <hr />
        {
            books.map(book => {
                return <Book key={book.title} book={book}/>
            })
        }
    </div>
  )
}

export default RenderingList