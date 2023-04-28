import React, { Component } from 'react';
import Proptypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="planet-block">
        <div className="what">
          <p data-testid="planet-name" className="planet-names">{ planetName }</p>
          <img
            className="planet-images"
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: Proptypes.string.isRequired,
  planetName: Proptypes.string.isRequired,
};

export default PlanetCard;
