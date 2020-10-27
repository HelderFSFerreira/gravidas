//import React, { setState } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/custom.css";

class Dates extends React.Component {

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
                  id='menstruationDate'
                  value={this.props.menstruationDate}
                  onChange={(e)=>this.props.onChange(e)}
                />
              </p>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <h3>Ecografia</h3>
              <input
                type="date"
                id="ecographyDate"
                value={this.props.ecographyDate}
                onChange={(e)=>this.props.onChange(e)}
                disabled={this.props.disabled}
              />
              <h4>Semanas</h4>
              <input
                type="number"
                id='weeks'
                value={this.props.weeks}
                onChange={(e)=>this.props.onChange(e)}
                disabled={this.props.disabled}
              ></input>
              <h4>Dias</h4>
              <input
                type="number"
                id='days'
                value={this.props.days}
                onChange={(e)=>this.props.onChange(e)}
                disabled={this.props.disabled}
              ></input>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dates;
