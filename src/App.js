
import './App.css';
import Characters from './components/Characters';
import ImagenRickMorty from './img/rick-morty.png'
import {useState} from 'react'





function App() {
  const [characters, setCharacters] = useState(null)
  const reqApi  = async () =>
  {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterAPI = await api.json()
    setCharacters(characterAPI.results)
   
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters?
          (
            <Characters characters= {characters} setCharacters={setCharacters}></Characters>
          )
          :(
          <>
          <img src={ImagenRickMorty}  className='img-home' alt='rick morty'/>
          <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
          )
        }
        
        
      </header>
    </div>
  );
}

export default App;
