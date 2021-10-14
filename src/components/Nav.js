/*eslint-disable*/
import React from 'react';
import { IconContext } from 'react-icons';
import { RiInformationLine } from 'react-icons/ri';
// import { GiAfrica } from 'react-icons/gi';

import { Link } from 'react-router-dom';


function Nav(props) {

  const navCheck = () => {
    if (props.txt !== 'Home'){
      return(
      <Link to="/" className="back-btn">
      {'<'}
      </Link>)
    }
  }

  return (
    <div className = 'navbar flex'>
      <div>{navCheck()}</div>
      <div>Covid in Africa</div>
      <Link to="/info" className="logo">
          <IconContext.Provider value={{ className: 'src-logo' }}>
            <div>
              <RiInformationLine />
            </div>
          </IconContext.Provider>
        </Link>

    </div>
  );
}

export default Nav;
