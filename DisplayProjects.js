import React, { Component } from "react";
//import Val8 from "./API";
import { Val8, Val9 } from "./API";
class Val7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      new_projects: "",
      new_projects1: "",
    };
  }
  render() {
    return (
      <div>
        <div class="signup">
          <form
            onSubmit={(e) => {
              console.log("submit called");
              e.preventDefault();
              //this.SubmitProject();
              Val9({
                project_title: this.state.new_projects,
                project_password: this.state.new_projects1,
              });
            }}
          >
            <label class="bar">
              Enter the name
              <input
                class="bar1"
                type="text"
                value={this.state.new_projects}
                onChange={(e) => {
                  this.setState({ new_projects: e.target.value });
                }}
              ></input>
              Enter the password
              <input
                class="bar2"
                type="password"
                value={this.state.new_projects1}
                onChange={(e) => {
                  this.setState({ new_projects1: e.target.value });
                }}
              ></input>
              <input
                class=" button-2 button2"
                type="submit"
                value="Submit Project"
              ></input>
            </label>
          </form>
        </div>
        <div class="blank"></div>
        <div>
          <ul>
            {this.state.projects.map((proj) => {
              return (
                <li key={proj.id}>
                  <div class="box">
                    <li>{proj.id}</li>
                    <li>{proj.title}</li>
                    <li>{proj.decription}</li>
                    <li>{proj.rating}</li>
                    <li>{proj.popularity}</li>
                    <li>{proj.status}</li>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("Project display mounted");
    //const fp = this.FetchProjects();
    //this.setState({ projects: fp });
    this.FetchProjects();
  }
  FetchProjects() {
    Val8().then((response) => {
      // console.log("fetch projects");
      //console.log(response.data);
      this.setState({ projects: response.data });
    });
    return [];
  }
  /*SubmitProject(e) {
    console.log(e);
    console.log("new projec:" + this.state.new_project);
    Val9(
      "http://localhost:3000/addproject",
      this.state.new_project,
      this.state.new_projects1
    ).then((response) => {
      console.log(response.data);
    });
    //e.preventDefault();
  }*/
}
export default Val7;
