import { useState, useEffect } from 'react' 
import BlogList from './BlogList'

const Home = () => {
    // const [name, setName] = useState('Mateo')
    // const handleName = () => {
    //     if(name == 'Mateo'){
    //         setName('Grifsha')
    //     }
    //     if(name == 'Grifsha'){
    //         setName('Mateo')
    //     }
         
    // }
    
    // const handleClick = (e) => {
    //     console.log('Hello World', e);
    // }
    // const handleClickParam = (name) => {
    //     console.log('Hello ' + name)
    // }
    const [blogs, setBlogs] = useState ([
        { title : 'My new website', body : 'lorem ipsum dolor amet', author : 'miles', id: 1},
        { title : 'It is wednesday my dudes', body : 'lorem ipsum dolor amet', author : 'miles', id: 2},
        { title : 'I drive', body : 'lorem ipsum dolor amet', author : 'ryan gosling', id: 3},
    ]);
    const [name, setName] = useState('mateo')
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect works')
        console.log(name)
    }, [name])


    return ( 
        <div className="home">
            <h2>Blogs</h2>
            <BlogList blogs = {blogs} handleDelete={handleDelete}/>
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'miles')} title = "Blogs pt2"/> */}

            {/* <button onClick={handleClick}>Click here</button>
            <button onClick={() => handleClickParam('Mateo')}>Click here Mateo</button>
            <p>{ name }</p>
            <button onClick={handleName}>Click here to change the name</button> */}
            <button onClick={() => setName('miles')}>Click here to change the name</button> 
            <p>{name}</p>
        </div>
     );
}
 
export default Home;