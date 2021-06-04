import React, { Component } from "react";

class FirstFunction extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 4300 };
  }
  render() {
    return (
      <div>
        <p>hyyyy {this.props.val}</p>
      </div>
    );
  }
}

export default FirstFunction;
