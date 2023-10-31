import { useState } from 'react'

const BlogList = ({blogs, handleDelete}) => {

    return (
        <div className='blog-list'>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>DELETE</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;