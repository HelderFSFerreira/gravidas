import React from "react";
import Constants from '../config/'

class Exams extends React.Component {

  render() {
    return (
      <div>
        <header className="major">
          <h2>Exames</h2>
        </header>
        <table id='exams'>
          <thead>
            {this.renderTableHead()}
          </thead>
          <tbody>
            {this.renderTableWithData()}
          </tbody>
        </table>
      </div>
    )
  }

  renderTableHead() {
    return (
      <tr>
        <th>{Constants.tableHeaderDesc.status}</th>
        <th>{Constants.tableHeaderDesc.desc}</th>
        <th>{Constants.tableHeaderDesc.start}</th>
        <th>{Constants.tableHeaderDesc.end}</th>
      </tr>
    )
  }

  renderTableWithData() {
    return this.props.value.map((exam,index) => {
      const {status, desc, since, until} = exam;
      
      return (
        <tr key={index}>
          <td>{status}</td>
          <td>{desc}</td>
          <td>{since}</td>
          <td>{until}</td>
        </tr>
      )
    });
  }
}


export default Exams;
