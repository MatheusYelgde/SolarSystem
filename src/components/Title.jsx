import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { headline } = this.props;
    return (
      <section>
        <h2>{headline}</h2>
      </section>
    );
  }
}
