import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const title = 'Welcome to the blog'
  const likes = 0;
  const person = {name : 'miles', age: 15};
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />





        {/* <p>{title}</p>
        <p>Liked {likes} time(s).</p>

        <p>{person.name} is {person.age}</p>
        <p>{['mateo', 12, 'g', 'r']}</p>
        <p>{Math.floor(Math.random() * 10) + 1}</p>

        <a href={link}>Google Site</a> */}
      </div>
    </div>
  );
}

export default App;
