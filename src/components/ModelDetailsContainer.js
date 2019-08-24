import React from "react";
import PropTypes from "prop-types";
import ModelDetails from "./ModelDetails";

export default class ModelDataContainer extends React.Component {
  static propTypes = {
    models: PropTypes.array.isRequired
  };
  render() {
    if (!this.props.models) return null;
    return (
      <div>
        {this.props.models.map(model => (
          <ModelDetails
            key={model.name}
            name={model.name}
            manufacturer={model.manufacturer}
            year={model.year}
            origin={model.origin}
          />
        ))}
      </div>
    );
  }
}
