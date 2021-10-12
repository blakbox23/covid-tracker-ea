import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCountry } from '../redux/countries/countries';

function Kenya() {
  const country = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(country);
    dispatch(getCountry('kenya'));
  }, []);
  return (
    <div>
      <p>
        Today Death ke
        {' '}
        {country}
      </p>
    </div>
  );
}

export default Kenya;
