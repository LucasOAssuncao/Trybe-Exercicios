import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';
import { pokemonType } from './types';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: { id, name, type, averageWeight, image },
    } = this.props;
    return (
      <div>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight:
              {' '}
              {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={ image } alt={ `${name} sprite` } />
        </div>
        <Link to={ `/${id}` }>Detalhes</Link>
      </div>
    );
  }
}
Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};
export default Pokemon;
