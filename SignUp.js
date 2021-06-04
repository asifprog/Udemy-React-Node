import Val3 from "./header";
import Val6 from "./Footerp2";
import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Signup></Signup>;
  }
}
function Signup(params) {
  return (
    <div class="udemy">
      <div>
        <Val3></Val3>
      </div>
      <div class="blank"></div>
      <div class="end-bar">
        <Val6></Val6>
      </div>
    </div>
  );
}
export default SignUp;
