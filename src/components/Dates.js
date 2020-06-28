//import React, { setState } from "react";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      menstruationDate: "",
    };
  }

  /* _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }; */

  menstruationChange(e) {
    var date = e.target.value;
    this.setState({ menstruationDate: date });
    date
      ? this.setState({ disabled: true })
      : this.setState({ disabled: false });
  }
  ecographyChange(e) {
    console.log(e.target.value);
  }
  weeksChange(e) {
    console.log(e.target.value);
  }

  daysChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <header className="major">
          <h2>Datas</h2>
        </header>

        <Container>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <h3>Última menstruação</h3>
              <p>
                <input
                  type="date"
                  onChange={this.menstruationChange.bind(this)}
                />
              </p>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <h3>Ecografia</h3>
              <input
                type="date"
                onChange={this.ecographyChange.bind(this)}
                disable={this.state.disabled.value}
              />
              <h4>Semanas</h4>
              <input
                type="number"
                max="53"
                onChange={this.weeksChange.bind(this)}
                disable={this.state.disabled.value}
              ></input>
              <h4>Dias</h4>
              <input
                type="number"
                max="7"
                onChange={this.daysChange.bind(this)}
                disable={this.state.disabled.value}
              ></input>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dates;
