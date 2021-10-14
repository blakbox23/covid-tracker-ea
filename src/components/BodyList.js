/* eslint react/prop-types: 0 */import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IconContext } from 'react-icons';
import { GiAfrica } from 'react-icons/gi';
import Nav from './Nav';
import { getCountries, getAfrinum } from '../redux/countries/countries';

function BodyList() {
  const countries = useSelector((state) => state.data.countries);
  const afriNum = useSelector((state) => state.data.afriNum);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  useEffect(() => {
    dispatch(getAfrinum());
  }, []);

  const toStr = (n) => n.toLocaleString();

  return (
    <>
      <Nav txt="Home Navbar" />
      <header className="header flex">
        <div className="header-img">
          <IconContext.Provider value={{ className: 'africa-img' }}>
            <div>
              <GiAfrica />
            </div>
          </IconContext.Provider>
        </div>
        <div className="header-text">
          <div><b>AFRICA</b></div>
          <div>{toStr(afriNum)}</div>
        </div>
      </header>
      <p className="title">COVID NUMBERS IN AFRICA</p>
      <div className="body-list flex">
        {countries.map((country) => (
          <div className="body-item" key={uuidv4()}>
            <div className="flag">
              <img src={country.countryInfo.flag} alt="logo-img" className="logo-img" />

            </div>
            <div className="body-item-txt">
              <Link to={`/${country.country}`}>
                {country.country}
              </Link>
              <div className="home-cases">{toStr(country.cases)}</div>
            </div>
          </div>
        ))}
      </div>

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
