import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <section>
        <h2>{headline}</h2>
      </section>
    )
  }
}
