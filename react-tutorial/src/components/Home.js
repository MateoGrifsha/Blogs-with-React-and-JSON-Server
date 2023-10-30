import { useState } from 'react' 

const Home = () => {

    const [name, setName] = useState('Mateo')
    const handleName = () => {
        if(name == 'Mateo'){
            setName('Grifsha')
        }
        if(name == 'Grifsha'){
            setName('Mateo')
        }
         
    }
    
    const handleClick = (e) => {
        console.log('Hello World', e);
    }
    const handleClickParam = (name) => {
        console.log('Hello ' + name)
    }
    return ( 
        <div className="home">
            <h2>HOMEPAGE</h2>
            <button onClick={handleClick}>Click here</button>
            <button onClick={() => handleClickParam('Mateo')}>Click here Mateo</button>
            <p>{ name }</p>
            <button onClick={handleName}>Click here to change the name</button>
        </div>
     );
}
 
export default Home;