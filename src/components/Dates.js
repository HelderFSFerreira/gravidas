import React from 'react'
import { Link } from 'gatsby'

const Dates = props => (
  <div>
    <header className="major">
      <h2>Datas</h2>
    </header>
    <h3>Última menstruação</h3>
    <p>
      <input type="date" />
    </p>
    <h3>Ecografia</h3>
    <p>
      <input type="date" />
    </p>
  </div>
)

export default Dates
