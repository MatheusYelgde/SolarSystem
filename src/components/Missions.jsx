import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions__containerborder">
          <div className="missions__containercard">
            {missions.map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
                // {...mission}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
