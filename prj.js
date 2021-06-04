import React, { Component } from "react";
class Val2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr_val: [
        { temp: "newest" },
        { temp: "highest-rated" },
        { temp: "popularity" },
        { temp: "all" },
      ],
      arr_projects: [
        {
          title: "Android Projects 2017",
          decription: "Need a fitness app for a gym",
          rating: "2.5",
          popularity: "92%",
          status: "New",
          flag1: true,
          flag2: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "Web Project 2017",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "92%",
          status: "BestSelller",
          flag1: false,
          flag2: true,
          flag3: true,
          flag4: true,
        },
        {
          title: "Flutter Project 2017",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "54%",
          status: "BestSeller",
          flag1: false,
          flag2: true,
          flag3: false,
          flag4: true,
        },
        {
          title: "IOS app 2017",
          decription: "Need a fitness app for a gym",
          rating: "1.0",
          popularity: "25%",
          status: "New",
          flag1: true,
          flag2: false,
          flag3: false,
          flag4: true,
        },
        {
          title: "Android Project 2018",
          decription: "Need a fitness app for a gym",
          rating: "3.0",
          popularity: "55%",
          status: "New",
          flag1: true,
          flag2: true,
          flag3: false,
          flag4: true,
        },

        {
          title: "Web Project 2018",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "95%",
          status: "BestSelller",
          flag2: true,
          flag1: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "Flutter Project 2018",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "85%",
          status: "BestSeller",
          flag2: true,
          flag1: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "IOS app 2018",
          decription: "Need a fitness app for a gym",
          rating: "2.0",
          popularity: "85%",
          status: "New",
          flag1: true,
          flag2: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "Flutter Project 2019",
          decription: "Need a fitness app for a gym",
          rating: "4.2",
          popularity: "45%",
          status: "BestSeller",
          flag2: true,
          flag1: false,
          flag3: false,
          flag4: true,
        },
        {
          title: "IOS app 2019",
          decription: "Need a fitness app for a gym",
          rating: "3.0",
          popularity: "35%",
          status: "New",
          flag1: true,
          flag2: true,
          flag3: false,
          flag4: true,
        },
        {
          title: "Flutter Project 2020",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "65%",
          status: "BestSeller",
          flag2: true,
          flag1: false,
          flag3: false,
          flag4: true,
        },
        {
          title: "IOS app 2020",
          decription: "Need a fitness app for a gym",
          rating: "2.0",
          popularity: "95%",
          status: "New",
          flag1: true,
          flag2: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "Android Projects 2016",
          decription: "Need a fitness app for a gym",
          rating: "2.5",
          popularity: "82%",
          status: "New",
          flag1: true,
          flag2: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "Web Project 2016",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "92%",
          status: "BestSelller",
          flag2: true,
          flag1: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "Flutter Project 2016",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "64%",
          status: "BestSeller",
          flag2: true,
          flag1: false,
          flag3: false,
          flag4: true,
        },
        {
          title: "IOS app 2016",
          decription: "Need a fitness app for a gym",
          rating: "1.0",
          popularity: "25%",
          status: "New",
          flag1: true,
          flag2: false,
          flag3: false,
          flag4: true,
        },
        {
          title: "Android Project 2021",
          decription: "Need a fitness app for a gym",
          rating: "3.0",
          popularity: "55%",
          status: "New",
          flag1: true,
          flag2: true,
          flag3: false,
          flag4: true,
        },
        {
          title: "Web Project 2021",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "95%",
          status: "BestSelller",
          flag2: true,
          flag1: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "Flutter Project 2021",
          decription: "Need a fitness app for a gym",
          rating: "4.0",
          popularity: "55%",
          status: "BestSeller",
          flag2: true,
          flag1: false,
          flag3: false,
          flag4: true,
        },
        {
          title: "IOS app 2021",
          decription: "Need a fitness app for a gym",
          rating: "2.5",
          popularity: "95%",
          status: "New",
          flag1: true,
          flag2: false,
          flag3: true,
          flag4: true,
        },
        {
          title: "Flutter Project 2015",
          decription: "Need a fitness app for a gym",
          rating: "4.2",
          popularity: "45%",
          status: "BestSeller",
          flag2: true,
          flag1: false,
          flag3: false,
          flag4: true,
        },
        {
          title: "IOS app 2015",
          decription: "Need a fitness app for a gym",
          rating: "2.0",
          popularity: "35%",
          status: "New",
          flag1: true,
          flag2: false,
          flag3: false,
          flag4: true,
        },
      ],
      currentPage: 1,
      todosPerPage: 5,
      todosPerPage1: 5,
      todosPerPage2: 5,
      todosPerPage3: 5,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handlechange(event) {
    this.setState({ temp: event.target.value });
    <print params={this.state.temp}></print>;
  }
  handleClick1(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  render() {
    //filter

    const usernew = this.state.arr_projects.filter((arr_projects) => {
      if (arr_projects.flag1) {
        return arr_projects;
      }
    });
    const rendernew = usernew.map((ele) => {
      return (
        <li>
          {ele.title},{ele.decription},{ele.rating},{ele.popularity},
          {ele.status}
        </li>
      );
    });

    const userrate = this.state.arr_projects.filter((arr_projects) => {
      if (arr_projects.flag2) {
        return arr_projects;
      }
    });
    const renderrate = userrate.map((ele1) => {
      return (
        <li>
          {ele1.title},{ele1.decription},{ele1.rating},{ele1.popularity},
          {ele1.status}
        </li>
      );
    });

    const userpopular = this.state.arr_projects.filter((arr_projects) => {
      if (arr_projects.flag3) {
        return arr_projects;
      }
    });
    const renderpopular = userpopular.map((ele2) => {
      return (
        <li>
          {ele2.title},{ele2.decription},{ele2.rating},{ele2.popularity},
          {ele2.status}
        </li>
      );
    });

    const usertotal = this.state.arr_projects.filter((arr_projects) => {
      if (arr_projects.flag4) {
        return arr_projects;
      }
    });
    const rendertotal = usertotal.map((ele3) => {
      return (
        <li>
          {ele3.title},{ele3.decription},{ele3.rating},{ele3.popularity},
          {ele3.status}
        </li>
      );
    });
    //pagination

    const { currentPage, todosPerPage } = this.state;
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = rendertotal.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(rendertotal.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick1}>
          {number}
        </li>
      );
    });

    const { todosPerPage1 } = this.state;
    // Logic for displaying todos
    const indexOfLastTodo1 = currentPage * todosPerPage1;
    const indexOfFirstTodo1 = indexOfLastTodo1 - todosPerPage1;
    const currentTodos1 = rendernew.slice(indexOfFirstTodo1, indexOfLastTodo1);
    const renderTodos1 = currentTodos1.map((todo1, index1) => {
      return <li key={index1}>{todo1}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers1 = [];
    for (let i = 1; i <= Math.ceil(rendernew.length / todosPerPage1); i++) {
      pageNumbers1.push(i);
    }

    const renderPageNumbers1 = pageNumbers1.map((number1) => {
      return (
        <li key={number1} id={number1} onClick={this.handleClick1}>
          {number1}
        </li>
      );
    });

    const { todosPerPage2 } = this.state;
    // Logic for displaying todos
    const indexOfLastTodo2 = currentPage * todosPerPage2;
    const indexOfFirstTodo2 = indexOfLastTodo2 - todosPerPage2;
    const currentTodos2 = renderrate.slice(indexOfFirstTodo2, indexOfLastTodo2);
    const renderTodos2 = currentTodos2.map((todo2, index2) => {
      return <li key={index2}>{todo2}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers2 = [];
    for (let i = 1; i <= Math.ceil(renderrate.length / todosPerPage2); i++) {
      pageNumbers2.push(i);
    }

    const renderPageNumbers2 = pageNumbers2.map((number2) => {
      return (
        <li key={number2} id={number2} onClick={this.handleClick1}>
          {number2}
        </li>
      );
    });

    const { todosPerPage3 } = this.state;
    // Logic for displaying todos
    const indexOfLastTodo3 = currentPage * todosPerPage3;
    const indexOfFirstTodo3 = indexOfLastTodo3 - todosPerPage3;
    const currentTodos3 = renderpopular.slice(
      indexOfFirstTodo3,
      indexOfLastTodo3
    );
    const renderTodos3 = currentTodos3.map((todo3, index3) => {
      return <li key={index3}>{todo3}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers3 = [];
    for (let i = 1; i <= Math.ceil(renderpopular.length / todosPerPage3); i++) {
      pageNumbers3.push(i);
    }

    const renderPageNumbers3 = pageNumbers3.map((number3) => {
      return (
        <li key={number3} id={number3} onClick={this.handleClick1}>
          {number3}
        </li>
      );
    });

    if (this.state.temp === "newest") {
      return (
        <div class="f2-div2">
          <select
            required=""
            name="sort"
            form="filter-form"
            class="f2-select"
            onChange={this.handlechange}
          >
            <option value="" disabled="">
              Sort
            </option>
            <option value="popularity" selected="">
              Most Popular
            </option>
            <option value="highest-rated">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
          <div>
            <ul>{renderTodos1}</ul>
            <ul id="page-numbers">{renderPageNumbers1}</ul>
          </div>
        </div>
      );
    } else if (this.state.temp === "highest-rated") {
      return (
        <div class="f2-div2">
          <select
            required=""
            name="sort"
            form="filter-form"
            class="f2-select"
            onChange={this.handlechange}
          >
            <option value="" disabled="">
              Sort
            </option>
            <option value="popularity" selected="">
              Most Popular
            </option>
            <option value="highest-rated">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
          <div>
            <ul>{renderTodos2}</ul>
            <ul id="page-numbers">{renderPageNumbers2}</ul>
          </div>
        </div>
      );
    } else if (this.state.temp === "popularity") {
      return (
        <div class="f2-div2">
          <select
            required=""
            name="sort"
            form="filter-form"
            class="f2-select"
            onChange={this.handlechange}
          >
            <option value="" disabled="">
              Sort
            </option>
            <option value="popularity" selected="">
              Most Popular
            </option>
            <option value="highest-rated">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
          <div>
            <ul>{renderTodos3} </ul>
            <ul id="page-numbers">{renderPageNumbers3}</ul>
          </div>
        </div>
      );
    } else {
      return (
        <div class="f2-div2">
          <select
            required=""
            name="sort"
            form="filter-form"
            class="f2-select"
            onChange={this.handlechange}
          >
            <option value="" disabled="">
              Sort
            </option>
            <option value="popularity" selected="">
              Most Popular
            </option>
            <option value="highest-rated">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
          <div>
            <ul>{renderTodos} </ul>
            <ul id="page-numbers">{renderPageNumbers}</ul>
          </div>
        </div>
      );
    }
  }
}
function print(params) {
  return <div>{params}</div>;
}
export default Val2;
