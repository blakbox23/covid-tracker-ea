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
      console.log('afterthis line');
      console.log(countryStats.totalcases)
      console.log('abovethis line');
  return (
    <div>
    <p>{country}</p>

      <div>Total Cases: {countryStats.totalcases}</div>
      <div>Active Cases: </div>
      <div>Recovered: </div>
    </div>
  );
}

export default ItemDescription;
