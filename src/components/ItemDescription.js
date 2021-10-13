/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryData } from '../redux/countries/countries'

function ItemDescription(props) {
  const country = props.country
  const dispatch = useDispatch();
  const countryStats = useSelector((state) => state.data.countryData);

  useEffect(() => {
        dispatch(getCountryData(country));
      }, []);
 
  return (
    <div>
    <p>{country}</p>

      <div>Total Cases: {countryStats.totalcases}</div>
      <div>Recovered: {countryStats.recovered}</div>
      <div>Tests: {countryStats.tests}</div>
    
    </div>
  );
}

export default ItemDescription;
