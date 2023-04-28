import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <section>
        <h2 className="text-second">{headline}</h2>
      </section>
    );
  }
}

Title.propTypes = {
  headline: Proptypes.string.isRequired,
};
