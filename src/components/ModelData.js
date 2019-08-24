import React from "react";
import PropTypes from "prop-types";

export default class ModelData extends React.Component {
  static propTypes = {
    models: PropTypes.array.isRequired
  };

  render() {
    const models = this.props.models;
    if (!models) return null;
    return (
      <div>
        {models.map(model => (
          <ul key={model.year}>
            <li>Name: {model.name}</li>
            <li>Manufacturer: {model.manufacturer}</li>
            <li>Year: {model.year}</li>
            <li>Origin: {model.origin}</li>
          </ul>
        ))}
      </div>
    );
  }
}
