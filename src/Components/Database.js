import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Database() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [buttonClick, setButtonClick] = useState(1)

    const handleClick = () =>{
        setButtonClick (id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>(
            console.log(err)
        ))
    }, [buttonClick])    

    
  
  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>fetch post</button>
        <div>{post.title}</div>
{/* <ul>
            {posts.map(posts =>( 
                <li key={posts.id}>{posts.title}</li>
            ))}
        </ul> */}
    </div>
  )
}

export default Database