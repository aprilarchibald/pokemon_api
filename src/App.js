import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [poke, setPoke] = useState([])

useEffect( () => {
  // getPokemon()
  //can put the function itself in here

}, [])

  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
      console.log(response.data.results);
      setPoke(response.data.results)
      }).catch(err=>{
      console.log(err);
    });
  }
  // Fetch Method
  // const getPokemon = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //     .then(response => {
  //       return response.json();
  //     }).then(response => {
  //     console.log(response.results);
  //     setPoke(response.results)
  //     }).catch(err=>{
  //     console.log(err);
  //   });
  // }

  return (
    <div className="App">
      {/* <button onClick={getPokemon}>Fetch Pokemon</button> */}
      <button onClick={getPokemon}>Axios Pokemon</button>
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
