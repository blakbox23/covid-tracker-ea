/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryData } from '../redux/countries/countries';
import Nav from '../components/Nav';

function ItemDescription(props) {
  const country = props.country
  const dispatch = useDispatch();
  const countryStats = useSelector((state) => state.data.countryData);
  // console.log("Country stats");
  // console.log(countryStats);

  useEffect(() => {
        dispatch(getCountryData(country));
      }, []);

  return (
    <div>
      <Nav txt={'Details'}/>
    <header className="header flex">
        <div className="header-img">
        {/* <img className="map" src= {`https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${countryStats.id.toLowerCase()}/vector.svg`} ></img> */}
        {/* {countryStats.id.toLowerCase()} */}
        </div>
        <div className="header-text">
          <div><b>{country}</b></div>

          {(countryStats.totalcases)}         
        </div>
      </header>

      <p className="title">COVID NUMBERS IN {country} </p>

      <div className="stats-list">
      <div className="flex stats-list-item" ><span>Total Cases:</span> <span>{(countryStats.totalcases)}</span></div>
      <div className="flex stats-list-item" ><span>Recovered:</span> <span>{(countryStats.recovered)}</span></div>
      <div className="flex stats-list-item" ><span>Active:</span> <span>{(countryStats.active)}</span></div>
      <div className="flex stats-list-item" ><span>Critical:</span> <span>{(countryStats.critical)}</span></div>
      <div className="flex stats-list-item" ><span>Tests:</span> <span>{(countryStats.tests)}</span></div>
      <div className="flex stats-list-item" ><span>Deaths:</span> <span>{(countryStats.deaths)}</span></div>
      </div>
    
    </div>
  );
}

export default ItemDescription;
