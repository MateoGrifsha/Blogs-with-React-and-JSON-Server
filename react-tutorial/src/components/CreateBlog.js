import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Miles')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = {title, body, author}
        setIsPending(true)
        
        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
        })

        navigate("/")
    }
 
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select value={ author } onChange={(e) => setAuthor(e.target.value)}>
                    <option value="miles">Miles</option>    
                    <option value="gwen">Gwen</option>    
                    <option value="Ryan Gosling(me)">Ryan Gosling (me)</option>    
                </select>   
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default CreateBlog;