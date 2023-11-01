import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            
            <Route exact path='/create'>
              <CreateBlog />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
