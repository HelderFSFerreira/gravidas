import React from "react";
import Helmet from "react-helmet";
import { Waypoint } from "react-waypoint";
import Header from "../components/Header";
import Layout from "../components/layout";
import Nav from "../components/Nav";
import Dates from "../components/Dates";
import Ecos from "../components/Ecos";
import Exams from "../components/Exams";
import Contacts from "../components/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import Constants from "../config/";

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
      ecos: Constants.ecos,
      exams: Constants.exams
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
    const changedValue = e.target.value;
    
    currentDates[changedInput]= changedValue;


    if (changedInput === 'menstruationDate') {
      initialDate = new Date(currentDates.menstruationDate)
    } else {
      let ecoDate = new Date(currentDates.ecographyDate)
      initialDate = new Date();
      initialDate.setDate(ecoDate.getDate() - (7 * currentDates.weeks || 0) - (currentDates.days || 0));
    }

    const diffDate = new Date() - initialDate;
    gestationWeek = Math.floor(diffDate / (1000 * 60 * 60 * 24 * 7));

    this.getEcosByWeeks(gestationWeek);
    this.getExamsByWeeks(gestationWeek);

    this.setState({
      dates: currentDates,
      gestationWeek: gestationWeek,
    })
  }

  getEcosByWeeks(gestationWeek) {
    let ecosToShow = [];
    console.log(gestationWeek);

    for (let i = 0; i < Constants.ecos.length; i++) {
      const eco = Constants.ecos[i];

      if (gestationWeek < eco.since) {
        eco.status = 'request'

        if (gestationWeek > eco.until) {
          eco.status = 'done'
        }
        ecosToShow.push(eco);
      }
    }

    this.setState({
      ecos: ecosToShow
    })
  }

  getExamsByWeeks(gestationWeek) {
    let examsToShow= [];

    for (let i = 0; i < Constants.exams.length; i++) {
      const exam = Constants.exams[i];
      if (gestationWeek < exam.since) {
        exam.status = 'request'

        if (gestationWeek > exam.until) {
          exam.status = 'done'
        }
        examsToShow.push(exam);
      }
      this.setState({
        exams: examsToShow
      })
    }
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
            <Ecos value={this.state.ecos} />
          </section>
          <section id="second" className="main special">
            <Exams value={this.state.exams}/>
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
