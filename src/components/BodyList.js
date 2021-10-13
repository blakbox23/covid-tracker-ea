/* eslint react/prop-types: 0 */import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IconContext } from 'react-icons';
import { GiAfrica } from 'react-icons/gi';
import Nav from './Nav';
import { getCountries } from '../redux/countries/countries';

function BodyList() {
  const countries = useSelector((state) => state.data.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <>
      <Nav txt="Home Navbar" />
      <header className="header flex">
        <div className="header-img">
          <IconContext.Provider value={{ color: 'blue', className: 'africa-img' }}>
            <div>
              <GiAfrica />
            </div>
          </IconContext.Provider>
        </div>
        <div className="header-text">
          <div>AFRICA</div>
          <div>num</div>
        </div>
      </header>
      <h1>Africa Covid tracking</h1>
      <ul>
        {countries.map((country) => (
          <li key={uuidv4()}>
            <Link to={`/${country.country}`}>
              {country.country}
            </Link>
            <div>{country.cases}</div>
          </li>
        ))}
      </ul>

      {/* <ul>
        {data.countries.map((country) => (
          <li key={region.id}>
            <Link to={`/${region.id}`}>
              {region.name}
            </Link>
          </li>
        ))}
      </ul>   */}
    </>
  );
}

export default BodyList;
