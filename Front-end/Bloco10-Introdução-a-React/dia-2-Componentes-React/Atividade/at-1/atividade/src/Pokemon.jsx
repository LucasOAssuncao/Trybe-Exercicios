import React from 'react';

export class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: peso, image } = this.props.pokemon;
    return (
      <section className="Pokemon">
        <div>
          <h2>Nome:<br></br> {name}</h2>
          <h2>Tipo:<br></br> {type}</h2>
          <h2>
            Peso:<br></br> {peso.value} {peso.measurementUnit}
          </h2>
        </div>

        <img className="imgPoke" src={image} alt='Imagem de um pokemon' />
      </section>
    );
  }
}
