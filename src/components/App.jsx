import React from "react";

import Login from "./Login";
import ShowCase from "./ShowCase";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isAuthencicated: false };
  }

  componentWillMount() {
    // Todo:: check for state.isAuthencicated
  }
  render() {
    return (
      <div className="ui-container" data-test="component-app">
        {this.state.isAuthencicated ? (
          "Logged in"
        ) : (
          <React.Fragment>
            <Login data-test="component-login" />
            <ShowCase data-test="component-showcase" />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
