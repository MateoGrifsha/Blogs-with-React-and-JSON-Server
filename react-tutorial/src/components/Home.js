const Home = () => {

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
        </div>
     );
}
 
export default Home;