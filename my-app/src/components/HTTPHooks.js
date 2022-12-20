import React, {useEffect, useState} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);
    const postToApi = () => {
            axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    title: 'Calle',
                    body: 'Calle is awesome',
                    userID: 814,
                }
            ).then(response => {
                setPostMessage(response.status == 201
                    ? `Success! Title: ${response.data.title}`
                    : 'Failed')

            })
        }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/9')
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data)
                ? response.data
                : [response.data]
            setPosts(data);
        })
        .catch(error => {
            setError(error.message);
        })
    }, [])
    return (
        <div>
            <button onClick={postToApi}>
                Create Post
            </button>
            <p>{postMessage}</p>
          <h2>Post:</h2>
          {
            posts.length ? (
              posts.map(post => (
                <div key={post.id}>
                  <h2>{post.id}: {post.title}</h2>
                  <h4>By User ID {post.userId}</h4>
                  <p>{post.body}</p>
                  <hr />
                </div>
              ))
            ) : (
              error
              ? <p>{error}</p>
              : <h4> Loading posts...</h4>
            )
          }
        </div>
      )
}

export default HTTPHooks