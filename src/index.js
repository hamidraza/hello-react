import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Hello from "./hello";

class App extends React.Component {
  state = {
    name: "hamid"
  };
  _handleChange = name => {
    this.setState({ name });
  };
  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <Hello name={name} onChange={this._handleChange} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
