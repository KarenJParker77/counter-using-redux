import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <p>The count is: {this.props.count}</p>
        <button
          onClick={() => {
            this.props.dispatch({ type: "INCREMENT" });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.dispatch({ type: "DECREMENT" });
          }}
        >
          Subtract
        </button>
        <button
          onClick={() => {
            this.props.dispatch({ type: "RESET" });
          }}
        >
          Reset
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(App);
