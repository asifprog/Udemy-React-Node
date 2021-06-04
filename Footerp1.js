import React, { Component } from "react";

class Val5 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 4300 };
  }
  render() {
    return <MyFooter></MyFooter>;
  }
}
function MyFooter(params) {
  return (
    <div class="end">
      <div class="end1">
        <ul class="end1-list">
          <li>
            <a
              class="end1-list1"
              href="https://business.udemy.com/?locale=en_US&amp;mx_pg=home-page&amp;ref=footer"
              target="_blank"
              rel="noopener"
              data-placement="footer"
            >
              Udemy for Business
            </a>
          </li>
          <li>
            <a class="end1-list2" href="/teaching/?ref=teach_footer">
              Teach on Udemy
            </a>
          </li>
          <li>
            <a
              class="end1-list3"
              href="/mobile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the app
            </a>
          </li>
          <li>
            <a class="end1-list4" href="https://about.udemy.com/?locale=en-us">
              About us
            </a>
          </li>
          <li>
            <a
              class="end1-list5"
              href="https://about.udemy.com/company?locale=en-us#offices"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div class="end2">
        <ul class="end2-list">
          <li>
            <a
              class="end2-list1"
              href="https://about.udemy.com/careers?locale=en-us"
            >
              Careers
            </a>
          </li>
          <li>
            <a class="end2-list2" href="https://blog.udemy.com/?ref=footer">
              Blog
            </a>
          </li>
          <li>
            <a class="end2-list3" href="/support/">
              {" "}
              Help and Support{" "}
            </a>
          </li>
          <li>
            <a class="end2-list4" href="/affiliate/">
              {" "}
              Affiliate{" "}
            </a>
          </li>
        </ul>
      </div>
      <div class="end3">
        <ul class="end3-list">
          <li>
            <a class="end3-list1" href="/term/">
              {" "}
              Terms{" "}
            </a>
          </li>
          <li>
            <a class="end3-list2" href="/terms/privacy/">
              {" "}
              Privacy policy{" "}
            </a>
          </li>
          <li>
            <a class="end3-list2" href="/sitemap/">
              {" "}
              Sitemap{" "}
            </a>
          </li>
          <li>
            <a class="end3-list3" href="/popular-courses/">
              Featured courses
            </a>
          </li>
        </ul>
      </div>
      <div class="end4"></div>
    </div>
  );
}

export default Val5;
