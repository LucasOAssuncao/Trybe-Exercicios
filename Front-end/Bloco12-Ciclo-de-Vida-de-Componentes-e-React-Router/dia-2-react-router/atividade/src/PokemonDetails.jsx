import React from 'react';

export default class PokemonDetails extends React.Component {
  render() {
    const { name, type, averageWeight, foundAt, summary } = this.props.pokemon;
    const { location, map } = foundAt;
    return (
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Peso:${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <p>{summary}</p>
        <p>{location}</p>
        <img src={ map } alt="mapa" />
      </div>
    );
  }
}

