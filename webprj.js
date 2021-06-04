//import Val3 from "./header";
import img from "./udemy.png";
import img1 from "./Cart.webp";
import Val5 from "./Footerp1";
import Val6 from "./Footerp2";
import Val7 from "./DisplayProjects";
import React, { Component } from "react";
class Val extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Btn_val: 0,
    };
  }

  render() {
    return (
      <div class="udemy">
        <div class="header">
          <div class="header-div1">
            <img src={img} alt="pic" width="150" height="70" />
          </div>
          <div class="header-div2">Categories</div>
          <div class="header-div3">
            <form>
              <input
                type="text"
                id="h-div"
                name="search"
                placeholder="Search for anything"
              />
            </form>
          </div>
          <div class="header-div4">Udemy for business</div>
          <div class="header-div5">Teach on udemy</div>
          <div class="header-div6">
            <img src={img1} alt="pic" width="30" height="30" />
          </div>
          <div class="header-div7">
            <button class="button-1 button1">Log in</button>
          </div>
          <div class="header-div8">
            <button class="button-2 button2" type="submit">
              Sign up
            </button>
          </div>
        </div>
        <div class="blank"></div>
        <div class="disproj">
          <Val7></Val7>
        </div>

        <div class="end">
          <Val5></Val5>
        </div>
        <div class="end-bar">
          <Val6></Val6>
        </div>
      </div>
    );
  }
}

export default Val;
