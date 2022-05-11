import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import Buttons from './Buttons';

const typeOfPokemon = [
  ...new Set(pokemons.reduce((types, { type }) => [...types, type], [])),
];

class Pokedex extends React.Component {
  state = {
    count: 0,
    type: 'Electric',
    pokeLength: 1,
  };

  incrementCount = () => {
    this.setState((state) => {
      if (state.count === state.pokeLength - 1) {
        return { count: 0 };
      }
      return { count: state.count + 1 };
    });
  };

  changeType = (string) => {
    this.setState((_state) => {
      const { pokemons } = this.props;
      return string === ''
        ? {
            count: 0,
            type: string,
            pokeLength: pokemons.length,
          }
        : {
            count: 0,
            type: string,
            pokeLength: pokemons.filter((pokemon) => pokemon.type === string)
              .length,
          };
    });
  };

  render() {
    const { count, type, pokeLength } = this.state;
    const { pokemons } = this.props;
    return (
      <>
        <div className='pokedex'>
          {type === ''
            ? pokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
              ))[count]
            : pokemons
                .filter((pokemon) => pokemon.type === type)
                .map((pokemon) => (
                  <Pokemon key={pokemon.id} pokemon={pokemon} />
                ))[count]}
        </div>
        <button onClick={() => this.changeType('')}>All</button>
        {typeOfPokemon.map((type) => (
          <Buttons key={type} type={type} func={() => this.changeType(type)} />
        ))}
        <button
          disabled={pokeLength === 1 ? true : false}
          onClick={this.incrementCount}
        >
          Próximo Pokemón
        </button>
      </>
    );
  }
}
export default Pokedex;
