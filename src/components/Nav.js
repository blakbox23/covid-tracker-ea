/*eslint-disable*/

import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {

  const navCheck = () => {
    if (props.txt == 'Details'){
      return(
      <Link to="/" className="back-btn">
      {'<'}
      </Link>)
    }
  }

  return (
    <div className = 'navbar flex'>
      <div>{navCheck()}</div>
      <div>Logo Text</div>
      <div>Icon</div>
    </div>
  );
}

export default Nav;
