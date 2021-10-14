/*eslint-disable*/
export const GET_COUNTRIES = 'countries/countries/GET_COUNTRIES';
export const GET_COUNTRY_DATA = 'countries/countries/GET_COUNTRY_DATA';
export const GET_AFRINUM = 'countries/countries/GET_AFRINUM';

const initialState = {
  countries: [],
  countryData: [],
  afriNum: [],
};

export const getCountries = () => async (dispatch) => {
  const data = await fetch(
    `https://corona.lmao.ninja/v2/countries?today=&sort=`,
    { method: 'GET' },
  );
  const bfData = await data.json();
  const newData = bfData.filter((country) => country.continent =='Africa')
  // const newData = bftrunc.slice(0, 20);
  dispatch({ type: GET_COUNTRIES, newData});
};

export const getAfrinum = () => async (dispatch) => {
  const data = await fetch(
    `https://disease.sh/v3/covid-19/continents/africa?strict=true`,
    { method: 'GET' },
  );
  const afriData = await data.json();
  const afrinum = afriData.cases
  dispatch({ type: GET_AFRINUM, afrinum});
};

export const getCountryData = (country) => async (dispatch) => {
  const data = await fetch(
    `https://disease.sh/v3/covid-19/countries/${country}`,
    { method: 'GET' },
  );
  const newData = await data.json();
  const countryData = {
      id: newData.countryInfo.iso3,
      totalcases: newData.cases,  
      recovered: newData.recovered,
      active: newData.active,
      critical: newData.critical,
      tests: newData.tests,
      deaths: newData.deaths
  };
  dispatch({ type: GET_COUNTRY_DATA, countryData});
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_COUNTRIES:
      return {...state, countries: action.newData};

    case GET_AFRINUM:
      return {...state, afriNum: action.afrinum};

    case GET_COUNTRY_DATA:
      return {...state, countryData: action.countryData};;

    default:
      return state;
  }
};

export default reducer;
