import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

class Exams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblity: "",
    };
  }

  /* _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }; */

  render() {
    return (
      <div>
        <header className="major">
          <h2>Exames e Ecografias</h2>
          <h3> Ecografias</h3>
          <Table responsive>
            <tbody>
              <tr>
                <td>Eco 1º T entre</td>
                <td>11 sem </td>
                <td>a</td>
                <td>13 sem + 6 dias</td>
              </tr>
              <tr>
                <td>Eco 2º T entre</td>
                <td>24 sem </td>
                <td>a</td>
                <td>28 sem</td>
              </tr>
              <tr>
                <td>Eco 3º T entre</td>
                <td>32 sem </td>
                <td>a</td>
                <td>34 sem </td>
              </tr>
            </tbody>
          </Table>
          <h3>Exames</h3>
          <Table responsive>
            <tbody>
              <tr>
                <td>Análises 1º T entre</td>
                <td>8 sem </td>
                <td>a</td>
                <td>12 sem + 6 dias</td>
              </tr>
              <tr>
                <td>Análises 1º T entre</td>
                <td>24 sem </td>
                <td>a</td>
                <td>28 sem</td>
              </tr>
              <tr>
                <td>Análises 3º T entre</td>
                <td>32 sem </td>
                <td>a</td>
                <td>34 sem</td>
              </tr>
            </tbody>
          </Table>
          <br></br>
          <Table responsive>
            <tbody>
              <tr>
                <td>Ex. vag+rect (StrepB)</td>
                <td>35 sem </td>
                <td>a</td>
                <td>37 sem </td>
              </tr>
            </tbody>
          </Table>
        </header>
      </div>
    );
  }
}

export default Exams;
