/*eslint-disable*/
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/countries/countries';
import { v4 as uuidv4 } from 'uuid';

function BodyList() {
  const countries = useSelector((state) => state.data.countries);
  const dispatch = useDispatch();

  const countryStats = useSelector((state) => state.data.countryData);

  console.log('the data is ' + countryStats.id);
  useEffect(() => {
    console.log('the data is ' + countryStats);
    dispatch(getCountries());
  }, []);
  return (
    <>
      <h1>Africa Covid tracking</h1>
      <ul>
        {countries.map((country) => (
        <li key={uuidv4()}>
            <Link to={`/${country}`}>
              {country}
            </Link>
            <div>{countryStats[0]}</div>
            </li>
        )
        )}
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
