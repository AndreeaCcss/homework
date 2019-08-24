import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

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

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <select>
          {data.map(model => (
            <option value={model.name}>
              {model.name}, ({model.year}}
            </option>
          ))}
        </select>
      </div>
    </Provider>
  );
}

export default App;
