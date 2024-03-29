import React from "react";
import "./App.css";
import { connect } from "react-redux";
import ModelDetailsContainer from "./components/ModelDetailsContainer";

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
];

class App extends React.Component {
  state = {
    name: ""
  };

  updateSelection = event => {
    const selectedModel = data.find(model => model.name === event.target.value);
    this.setState(selectedModel);
  };

  handleSubmit = () => {
    this.props.dispatch({
      type: "ADD_MODEL",
      payload: this.state
    });
  };

  render() {
    return (
      <div className="App">
        {this.props.models.length > 0 && (
          <ModelDetailsContainer models={this.props.models} />
        )}
        <select value={this.state.value} onChange={this.updateSelection}>
          <option>-- pick a model --</option>
          {data.map(model => (
            <option value={model.name} key={model.name}>
              {model.name}, ({model.year}}
            </option>
          ))}
        </select>
        <button type="submit" onClick={this.handleSubmit}>
          Add
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    models: state
  };
};

export default connect(mapStateToProps)(App);
