import React from "react";
import Constants from '../config/';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

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
          <td>{this.renderIcon(status)}</td>
          <td>{desc}</td>
          <td>{since}</td>
          <td>{until}</td>
        </tr>
      )
    });
  }

  renderIcon(status) {
    console.log(status);
    switch (status) {
      case 'request':
        return <AssignmentTurnedInIcon/>
      case 'done':
        return <DoneAllIcon/>;
      default:
        return <AssignmentTurnedInIcon/>
    }
  }
}


export default Exams;
