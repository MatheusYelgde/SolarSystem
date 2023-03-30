import React from 'react';
import Proptypes from 'prop-types';
import missions from '../data/missions';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: Proptypes.string.isRequired,
  year: Proptypes.string.isRequired,
  country: Proptypes.string.isRequired,
  destination: Proptypes.string.isRequired,
};


export default MissionCard;
