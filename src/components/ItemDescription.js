/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryData } from '../redux/countries/countries';
import Nav from './Nav';

function ItemDescription(props) {
  const country = props.country
  const dispatch = useDispatch();
  const countryStats = useSelector((state) => state.data.countryData);
  console.log('countryStats')
  console.log(countryStats)

  useEffect(() => {
        dispatch(getCountryData(country));
      }, []);

  const toStr = n => n.toLocaleString();

  return (
    <div>
      <Nav txt={'Details'}/>
    <header className="header flex">
        <div className="header-img">
        </div>
        <div className="header-text">
          <div><b>{country}</b></div>

          {(countryStats.totalcases)}         
        </div>
      </header>

      <p className="title">COVID NUMBERS IN {country} </p>

      <div className="stats-list">
      <div className="flex stats-list-item" ><span>Total Cases:</span> <span>{toStr(countryStats.totalcases)}</span></div>
      <div className="flex stats-list-item" ><span>Recovered:</span> <span>{toStr(countryStats.recovered)}</span></div>
      <div className="flex stats-list-item" ><span>Active:</span> <span>{toStr(countryStats.active)}</span></div>
      <div className="flex stats-list-item" ><span>Critical:</span> <span>{toStr(countryStats.critical)}</span></div>
      <div className="flex stats-list-item" ><span>Tests:</span> <span>{toStr(countryStats.tests)}</span></div>
      <div className="flex stats-list-item" ><span>Deaths:</span> <span>{toStr(countryStats.deaths)}</span></div>
      </div>
    
    </div>
  );
}

export default ItemDescription;
