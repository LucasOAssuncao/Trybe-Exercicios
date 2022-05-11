import React from 'react';
import Pokemon from './Pokemon';

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
      return {
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
          {
            pokemons
              .filter((pokemon) => pokemon.type === type)
              .map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)[
              count
            ]
          }
        </div>
        <button className='fire' onClick={() => this.changeType('Fire')}>Fire</button>
        <button className='bug' onClick={() => this.changeType('Bug')}>Bug</button>
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
