import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCountry } from '../redux/countries/countries';

function Tanzania() {
  const country = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry('tanzania'));
  }, []);
  return (
    <div>
      <p>
        Today Death
        {' '}
        {country[1]}
      </p>
    </div>
  );
}

export default Tanzania;
