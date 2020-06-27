import React from 'react'

import logo from '../assets/images/inicialLogo.png'
import Title from './Title'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <Title />
  </header>
)

export default Header
