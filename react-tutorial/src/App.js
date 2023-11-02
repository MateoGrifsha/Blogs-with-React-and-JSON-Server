import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/404';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route exact path='/' element ={ <Home /> } />
            <Route exact path='/create' element={ <CreateBlog /> } />
            <Route exact path='/blogs/:id' element ={ <BlogDetails /> } />
            <Route path = '*' element = { <NotFound /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
