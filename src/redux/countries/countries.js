/*eslint-disable*/
export const GET_COUNTRIES = 'countries/countries/GET_COUNTRIES';
export const GET_COUNTRY_DATA = 'countries/countries/GET_COUNTRY_DATA';

const initialState = {
  countries: [],
  countryData: [],
};

export const getCountries = () => async (dispatch) => {
  const data = await fetch(
    `https://corona.lmao.ninja/v2/countries?today=&sort=`,
    { method: 'GET' },
  );
  const bfData = await data.json();
  const bftrunc = bfData.filter((country) => country.continent =='Africa')
  const newData = bftrunc.slice(0, 20);
  dispatch({ type: GET_COUNTRIES, newData});
};

export const getCountryData = (country) => async (dispatch) => {
  const data = await fetch(
    `https://disease.sh/v3/covid-19/countries/${country}`,
    { method: 'GET' },
  );
  const newData = await data.json();
//  console.log(newData)
  const countryData = {
      id: newData.countryInfo.iso3,
      totalcases: newData.cases,  
      recovered: newData.recovered,
      tests: newData.tests,

  };

  console.log(countryData)

  dispatch({ type: GET_COUNTRY_DATA, countryData});
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_COUNTRIES:
      return {...state, countries: action.newData};

    case GET_COUNTRY_DATA:
      return {...state, countryData: action.countryData};;

    default:
      return state;
  }
};

export default reducer;
