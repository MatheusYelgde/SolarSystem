import React from 'react';
import Proptypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="mission-block">
        <p data-testid="mission-name" className="mission-name">{ name }</p>
        <p data-testid="mission-year" className="mission-year">{ year }</p>
        <div>
          <span className="material-icons mission-country">my_location</span>
          <p
            data-testid="mission-country"
            className="mission-country missionCountri"
          >
            { country }

          </p>
        </div>
        <span className="material-icons mission-dest">flag</span>
        <p data-testid="mission-destination" className="mission-dest misu">
          { destination }
        </p>
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
