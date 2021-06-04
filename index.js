const { res } = require("express");
const { res1 } = require("express");
const expressModule = require("express");

const app = expressModule();

const cors = require("cors");

const Joi = require("joi");

app.use(expressModule.json());
const projects1 = [
  {
    id: 1,
    title: "Asif Ali",
    password: "123",
  },
];

const projects = [
  {
    id: 1,
    title: "Android Projects 2017",
    decription: "Need a fitness app for a gym",
    rating: "2.5",
    popularity: "92%",
    status: "New",
  },
  {
    id: 2,
    title: "Web Project 2017",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "92%",
    status: "BestSelller",
  },
  {
    id: 3,
    title: "Flutter Project 2017",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "54%",
    status: "BestSeller",
  },
  {
    id: 4,
    title: "IOS app 2017",
    decription: "Need a fitness app for a gym",
    rating: "1.0",
    popularity: "25%",
    status: "New",
  },
  {
    id: 5,
    title: "Android Project 2018",
    decription: "Need a fitness app for a gym",
    rating: "3.0",
    popularity: "55%",
    status: "New",
  },

  {
    id: 6,
    title: "Web Project 2018",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "95%",
    status: "BestSelller",
  },
  {
    id: 7,
    title: "Flutter Project 2018",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "85%",
    status: "BestSeller",
  },
  {
    id: 8,
    title: "IOS app 2018",
    decription: "Need a fitness app for a gym",
    rating: "2.0",
    popularity: "85%",
    status: "New",
  },
  {
    id: 9,
    title: "Flutter Project 2019",
    decription: "Need a fitness app for a gym",
    rating: "4.2",
    popularity: "45%",
    status: "BestSeller",
  },
  {
    id: 10,
    title: "IOS app 2019",
    decription: "Need a fitness app for a gym",
    rating: "3.0",
    popularity: "35%",
    status: "New",
  },
  {
    id: 11,
    title: "Flutter Project 2020",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "65%",
    status: "BestSeller",
  },
  {
    id: 12,
    title: "IOS app 2020",
    decription: "Need a fitness app for a gym",
    rating: "2.0",
    popularity: "95%",
    status: "New",
  },
  {
    id: 13,
    title: "Android Projects 2016",
    decription: "Need a fitness app for a gym",
    rating: "2.5",
    popularity: "82%",
    status: "New",
  },
  {
    id: 14,
    title: "Web Project 2016",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "92%",
    status: "BestSelller",
  },
  {
    id: 15,
    title: "Flutter Project 2016",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "64%",
    status: "BestSeller",
  },
  {
    id: 16,
    title: "IOS app 2016",
    decription: "Need a fitness app for a gym",
    rating: "1.0",
    popularity: "25%",
    status: "New",
  },
  {
    id: 17,
    title: "Android Project 2021",
    decription: "Need a fitness app for a gym",
    rating: "3.0",
    popularity: "55%",
    status: "New",
  },
  {
    id: 18,
    title: "Web Project 2021",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "95%",
    status: "BestSelller",
  },
  {
    id: 19,
    title: "Flutter Project 2021",
    decription: "Need a fitness app for a gym",
    rating: "4.0",
    popularity: "55%",
    status: "BestSeller",
  },
  {
    id: 20,
    title: "IOS app 2021",
    decription: "Need a fitness app for a gym",
    rating: "2.5",
    popularity: "95%",
    status: "New",
  },
];

app.options("/addproject", cors());

app.get("/", (request, res) => {
  console.log("Get function called at the server");
  res.send([1, 2, 3]);

  //response.send(projects);
});

app.get("/projects", (request, res) => {
  console.log("projects page accessed");
  res.header("Access-Control-Allow-Origin", "*");
  res.send(projects);
});

// /projects/1
// /projects/8

app.get("/projects/:temp", (request, res) => {
  console.log("Parameters received: " + request.params.temp);

  var selected_project = projects.find((project) => {
    return project.id === parseInt(request.params.id);
  });

  //response.send(selected_project);
  res.send([12, 34]);
});

// /projects/1/2

app.get("/projects/:id1/:id2", (req, res) => {
  console.log("/id1/id2 accessed");
  res.send([1, 2]);
});

app.post("/addproject", (req, res1) => {
  // console.log(req.body.project_description);
  //console.log(req.body.Budget);
  console.log("Post method called");

  const new_project = {
    id: projects1.length + 1,
    title: req.body.project_title,
    password: req.body.project_password,
  };

  //const error = validate_project(new_project);
  res1.header("Access-Control-Allow-Origin", "*");
  /*if (error) {
    console.log(error);
    //    res.send("Error occured: " + error);
    //    res.send(error);

    res.send(error.details[0].message);
    return;
  }*/

  projects1.push(new_project);
  res1.send(projects1);
});

/*function validate_project(project) {
  const schema = Joi.object({
    id: Joi.number().integer().min(1).max(50).required(),
    title: Joi.string().min(1).max(100).alphanum().required(),
    password: Joi.number().integer().min(1).max(50).required(),
  });

  const result = schema.validate(project);

  return result.error;
}*/

app.listen(3000, () => {
  console.log("Server started: Listening at port 3000");
});

/*app.post("/admin", (request, response) => {});
app.post("/addProject", (request, response) => {
  console.log("post method called");
  console.log(request.body.project_title);

  const new_project = {
    id: projects.length + 1,
    title: request.body.project_title,
  };

  const error = validate_project(new_project);

  if (error) {
    response.status(404).send(error.details[0].message);
    return;
  }
  projects.push(new_project);
  response.send(projects);
});


function validate_project(project) {
  const schema = Joi.object({
    id: Joi.number().min(1).max(10),
    title: Joi.string().alphanum().min(3).required(),
  });

  const result = schema.validate(project);
  return result.error;
}

app.listen(3000, () => {
  console.log("Server started: Listening at port 3000");
});

/*app.get("/projects/1", (request, response) => {
  response.send(projects[0]);
});

app.get("/projects/2", (request, response) => {
  response.send(projects[1]);
});

app.get("/projects/3", (request, response) => {
  response.send(projects[2]);
}); */

/*app.post("/api/courses", (req, res) => {
  console.log("Received");
  console.log(req.body);
  const course = { id: projects.length + 1, title: req.body.courseName };
  console.log(req.body.courseName);
  const error = validate(course);
  if (error) {
    res.send(error);
    return;
  }
  console.log("No error");
  projects.push(course);
  res.send(course);
});

function validate(course) {
  const schema = Joi.object({
    id: Joi.number().integer(),
    title: Joi.string().alphanum().min(3).max(30).required(),
  });
  const result = schema.validate(course);
  return result.error;
}

app.listen(3000, () => {
  console.log("Server started: Listening at port 3000");
});

/*const expressModule = require("express");
const Joi = require("joi");

const app = expressModule();

app.use(expressModule.json());

const courses = [
  { id: 1, title: "course 1" },
  { id: 2, title: "course 2" },
];

app.get("/", (req, res) => {
  console.log("request received");
  res.send("Helloo");
});

app.get("/api/courses", (request, response) => {
  console.log(request.query);
  response.send(courses);
});

app.get("/api/courses/:id", (request, response) => {
  console.log(request.params);

  const course = courses.find((course) => {
    console.log(course.id);
    console.log(request.params.id);
    return course.id === parseInt(request.params.id);
  });

  console.log(course);
  if (!course) response.status(404).send("Course not found");

  response.send(course);
});

app.get("/api/courses", (req, res) => {});

app.get("/api/courses/:year/:month", (request, response) => {
  console.log(request.params);
  response.send(request.params.year);
});

app.post("/api/courses", (req, res) => {
  const course = { id: courses.length + 1, title: req.body.courseName };
  console.log(req.body.courseName);
  const error = validate(course);
  if (error) {
    res.send(error);
    return;
  }
  console.log("No error");
  courses.push(course);
  res.send(course);
});

function validate(course) {

  const schema = Joi.object({
    id: Joi.number().integer(),
    title: Joi.string().alphanum().min(3).max(30).required(),
  });
  const result = schema.validate(course);
  return result.error;
}

app.listen(3000, () => {
  console.log("waooo");
}); */
