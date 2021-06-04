import React, { Component } from "react";
class Val1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Mybutton></Mybutton>;
  }
}

function Mybutton(params) {
  return (
    <div>
      <button>{}</button>
      <button>{}</button>
    </div>
  );
}
export default Val1;
