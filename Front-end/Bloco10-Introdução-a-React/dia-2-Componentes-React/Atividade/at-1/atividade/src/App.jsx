import './App.css';
import { Pokemon } from './Pokemon';
import pokemons from './data';

function App() {
  return (
    <div className='divPai'>
      {pokemons.map((item) => {
        return <Pokemon pokemon={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
