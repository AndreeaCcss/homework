import React from "react";
import PropTypes from "prop-types";

export default class ModelDetails extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired
  };

  render() {
    return (
      <ul key={this.props.year}>
        <li>Name: {this.props.name}</li>
        <li>Manufacturer: {this.props.manufacturer}</li>
        <li>Year: {this.props.year}</li>
        <li>Origin: {this.props.origin}</li>
      </ul>
    );
  }
}
