import axios from "axios";

function Val8(params) {
  return axios({ method: "GET", url: "http://localhost:3000/projects" });
}

function Val9(params) {
  console.log("inside post project");
  const Project = {
    project_title: params.project_title,
    project_password: params.project_password,
  };
  return axios({
    method: "POST",
    url: "http://localhost:3000/addproject",
    data: Project,
  });
}
export { Val8, Val9 };
