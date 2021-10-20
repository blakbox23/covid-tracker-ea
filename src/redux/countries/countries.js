export const GET_COUNTRIES = 'countries/countries/GET_COUNTRIES';
export const GET_COUNTRY_DATA = 'countries/countries/GET_COUNTRY_DATA';
export const GET_AFRINUM = 'countries/countries/GET_AFRINUM';
export const GET_GRAPH_DATA = 'countries/countries/GET_GRAPH_DATA';

const initialState = {
  countries: [],
  countryData: [],
  afriNum: [],
  graphData: [],
};

export const getCountries = () => async (dispatch) => {
  const data = await fetch(
    'https://disease.sh/v3/covid-19/countries',
    { method: 'GET' },
  );
  const bfData = await data.json();
  const newData = bfData.filter((country) => country.continent === 'Africa');
  dispatch({ type: GET_COUNTRIES, newData });
};

export const getAfrinum = () => async (dispatch) => {
  const data = await fetch(
    'https://disease.sh/v3/covid-19/continents/africa?strict=true',
    { method: 'GET' },
  );
  const afriData = await data.json();
  const afrinum = afriData.cases;
  dispatch({ type: GET_AFRINUM, afrinum });
};

export const getCountryData = (country) => async (dispatch) => {
  const data = await fetch(
    `https://disease.sh/v3/covid-19/countries/${country}`,
    { method: 'GET' },
  );
  const newData = await data.json();
  const countryData = {
    id: newData.countryInfo.iso2,
    totalcases: newData.cases,
    recovered: newData.recovered,
    active: newData.active,
    critical: newData.critical,
    tests: newData.tests,
    deaths: newData.deaths,
  };
  dispatch({ type: GET_COUNTRY_DATA, countryData });
};

// export const getGraphData = () => async (dispatch) => {
//   const graphData = await [9, 3, 4, 6, 7, 9];

//   dispatch({ type: GET_GRAPH_DATA, graphData });
// };

export const getGraphData = (country) => async (dispatch) => {
  const graphData = [];
  const today = new Date();
  const startingDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 7}`;
  const currentDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}`;
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${startingDate}&date_to=${currentDate}`);
  const data = await request.json();
  const dataDates = data.dates;

  Object.keys(dataDates).forEach((date) => {
    const point = dataDates[date].countries[country].today_open_cases;
    graphData.push(point);
    // console.log(dataDates[date].countries[country].today_confirmed);
    return graphData;
  });
  // console.log(graphData);

  dispatch({ type: GET_GRAPH_DATA, graphData });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.newData };

    case GET_AFRINUM:
      return { ...state, afriNum: action.afrinum };

    case GET_COUNTRY_DATA:
      return { ...state, countryData: action.countryData };

    case GET_GRAPH_DATA:
      return { ...state, graphData: action.graphData };

    default:
      return state;
  }
};

export default reducer;
