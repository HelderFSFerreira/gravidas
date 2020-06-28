import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { Waypoint } from "react-waypoint";
import pic01 from "../assets/images/pic01.jpg";
import Header from "../components/Header";
import Layout from "../components/layout";
import Nav from "../components/Nav";
import Dates from "../components/Dates";
import Tests from "../components/Tests";
import Exams from "../components/Exams";
import Contacts from "../components/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
    };
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />
        <Header />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />
        <div id="main">
          <section id="intro" className="main special">
            <Dates />
          </section>

          <section id="first" className="main special">
            <Tests />
          </section>
          <section id="second" className="main special">
            <Exams />
          </section>

          <section id="cta" className="main special">
            <Contacts />
          </section>
        </div>

        <Button variant="dark"></Button>
      </Layout>
    );
  }
}

export default Index;
