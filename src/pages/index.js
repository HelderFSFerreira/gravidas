import React from "react";
import Helmet from "react-helmet";
import { Waypoint } from "react-waypoint";
import Header from "../components/Header";
import Layout from "../components/layout";
import Nav from "../components/Nav";
import Dates from "../components/Dates";
import Tests from "../components/Tests";
import Exams from "../components/Exams";
import Contacts from "../components/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
      gestationWeek: null,
      dates: {
        menstruationDate: null,
        ecographyDate: null,
        weeks: 0,
        days: 0,
        disabled: false,
      },
      exams: [{
        status: null,
        desc: 'Eco 1o Trimestre',
        since: 11,
        until: 13
      },
      {
        status: null,
        desc: 'Eco 2o Trimestre',
        since: 24,
        until: 28
      },
      {
        status: null,
        desc: 'Eco 3o Trimestre',
        since: 32,
        until: 34
      }
    ]
    };
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };



  handleDatesChanged(e) {
    let currentDates = this.state.dates;
    let gestationWeek;
    let initialDate;

    const changedInput = e.target.id;
    // const changedValue = e.target.value;
    
    currentDates[e.target.id]= e.target.value;


    if (changedInput === 'menstruationDate') {
      initialDate = new Date(currentDates.menstruationDate)
    } else {
      let ecoDate = new Date(currentDates.ecographyDate)
      initialDate = new Date();
      initialDate.setDate(ecoDate.getDate() - (7 * currentDates.weeks || 0) - (currentDates.days || 0));
    }

    const diffDate = new Date() - initialDate;
    gestationWeek = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 7));

    this.setState({
      dates: currentDates,
      gestationWeek: gestationWeek,
    })
  }

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
            <Dates 
              value={this.state.dates} 
              onChange={(e,key)=>this.handleDatesChanged(e)}
            />
          </section>
          <section id="first" className="main special">
            <Tests value={this.state.exams} />
          </section>
          <section id="second" className="main special">
            <Exams />
          </section>

          <section id="cta" className="main special">
            <Contacts />
          </section>
        </div>
      </Layout>
    );
  }
}

export default Index;
