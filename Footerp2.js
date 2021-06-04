import img from "./udemy.png";
import imgp from "./end.png";
import React, { Component } from "react";

class Val6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <MyFooter></MyFooter>;
  }
}
function MyFooter(params) {
  return (
    <div class="end-bar">
      <div class="end-bar1">
        <img src={img} alt="pic" width="150" height="100px" />
      </div>
      <div class="end-bar2">
        <img src={imgp} alt="pic" width="100" height="25px" />
      </div>
    </div>
  );
}

export default Val6;
