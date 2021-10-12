/*eslint-disable*/
export const GET_COUNTRY = 'countries/countries/GET_COUNTRY';

const initialState = [];

export const getCountry = (country) => async (dispatch) => {
  const data = await fetch(
    `https://api.covid19tracking.narrativa.com/api/2021-10-12/country/${country}`,
    { method: 'GET' },
  );
  const newData = await data.json();
  const formattedData = [1];

  formattedData.push({
      newConfirmed: newData.total.today_confirmed,
      newDeath: newData.total.today_deaths,
});


  //   const formattedData = {
  //     item_id: country,
  //     confirmed: newData.total.today_confirmed,
  //   };
  dispatch({ type: GET_COUNTRY, formattedData});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_BOOK:
    //   return [...state, action.payload];

    case GET_COUNTRY:
      return action.formattedData;

      // case REMOVE_BOOK:
      //   return state.filter((book) => book.item_id !== action.payload.item_id);

    default:
      return state;
  }
};

export default reducer;
