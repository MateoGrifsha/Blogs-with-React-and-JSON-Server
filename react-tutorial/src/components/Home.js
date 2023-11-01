import  useFetch  from '../hooks/useFetch'
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

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    const { data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            <h2>Blogs</h2>
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} />}
            {error && <div className='error'>{error}</div>}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'miles')} title = "Blogs pt2"/> */}

            {/* <button onClick={handleClick}>Click here</button>
            <button onClick={() => handleClickParam('Mateo')}>Click here Mateo</button>
            <p>{ name }</p>
            <button onClick={handleName}>Click here to change the name</button> */}
        </div>
     );
}
 
export default Home;