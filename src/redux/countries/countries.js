/*eslint-disable*/
export const GET_COUNTRY = 'countries/countries/GET_COUNTRY';

const initialState = [];

export const getCountries = () => async (dispatch) => {
  const data = await fetch(
    `https://disease.sh/v3/covid-19/continents/africa?strict=true`,
    { method: 'GET' },
  );
  const newData = await data.json();

  //   const formattedData = {
  //     item_id: country,
  //     confirmed: newData.total.today_confirmed,
  //   };
  dispatch({ type: GET_COUNTRY, newData});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_BOOK:
    //   return [...state, action.payload];

    case GET_COUNTRY:
      return action.newData.countries;

      // case REMOVE_BOOK:
      //   return state.filter((book) => book.item_id !== action.payload.item_id);

    default:
      return state;
  }
};

export default reducer;
