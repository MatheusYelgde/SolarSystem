import React, { Component } from 'react';
import planets from '../data/planets';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage} = this.props;
    const { name } = planets;
    const { image } = planets;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        {/* <ul>
          {planets.map((system) =>
            <li key={ name }> { system } </li>)}
        </ul> */}
      </div>
    );
  }
}
