import {useState} from 'react';
import './App.css';

function App() {

const [poke, setPoke] = useState([])

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        return response.json();
      }).then(response => {
      console.log(response.results);
      setPoke(response.results)
      }).catch(err=>{
      console.log(err);
    });
  }

  return (
    <div className="App">
      <button onClick={getPokemon}>Fetch Pokemon</button>
      {/* poke: {JSON.stringify(poke)} */}
      <ul>
          {poke.map( (onePoke, idx) =>{
            return <li key={idx}>{onePoke.name}</li> 
          })
          }
      </ul>

    </div>
  );
}

export default App;
