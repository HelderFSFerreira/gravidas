import React from "react";
import { Link } from "gatsby";

// const Tests = (props) => (
//   <div>
//     <header className="major">
//       <h2>Análises e Ecografias</h2>
//     </header>
//     <ul className="features"></ul>
//   </div>
// );



class Tests extends React.Component {

  render() {
    return (
      <div>
        <header className="major">
          <h2>Análises e Ecografias</h2>
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
        <th>Descrição</th>
        <th>Incio</th>
        <th>Fim</th>
      </tr>
    )
  }

  renderTableWithData() {
    return this.props.value.map((exam,index) => {
      const { desc, since, until} = exam;
      
      return (
        <tr key={index}>
          <td>{desc}</td>
          <td>{since}</td>
          <td>{until}</td>
        </tr>
      )
    })
  }

}

export default Tests;