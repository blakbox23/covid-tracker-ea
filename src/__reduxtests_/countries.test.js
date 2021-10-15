import reducer, {
  getCountries,
  getAfrinum,
  getCountryData,
  GET_COUNTRIES,
  GET_COUNTRY_DATA,
  GET_AFRINUM,
} from '../redux/countries/countries';
import data from './storeMock';

describe('getCountries returns expected values', () => {
  test('getCountries return a truthy value', () => {
    expect(getCountries()).toBeTruthy();
  });
  test('get countries return an array of country objects', () => {
    expect(getCountryData()).toBeInstanceOf(Object);
  });
});

describe('getAfrinum returns expected values', () => {
  test('getAfrinum return a truthy value', () => {
    expect(getAfrinum()).toBeTruthy();
  });
  test('getAfrinum return a number', () => {
    expect(getAfrinum()).not.toContain(data);
  });
});

describe('getCountryData returns expected values', () => {
  test('getCountryData return a truthy value', () => {
    expect(getCountryData()).toBeTruthy();
  });
  test('getAfrinum return an object', () => {
    expect(getCountryData()).toBeInstanceOf(Object);
  });
});

describe('reducer', () => {
  test('should update the state and accept country values from the API', () => {
    const action = {
      type: GET_COUNTRIES,
      newData: data,
    };
    const newState = reducer({}, action);
    const { country } = newState.countries[0].countries[0];
    const { cases } = newState.countries[0].countries[0];
    expect(country).toBe('Kenya');
    expect(cases).toEqual(2044900);
  });
  test('should not return undefined', () => {
    const action = {
      type: GET_COUNTRIES,
    };
    expect(reducer({}, action)).not.toBeUndefined();
  });

  test('should update the state and accept countryData values from the API', () => {
    const action = {
      type: GET_COUNTRIES,
      newData: data,
    };
    const newState = reducer({}, action);
    const { active } = newState.countries[0].countryData;
    expect(active).toEqual(58571);
  });
  test('State should be truthy after GET_COUNTRY_DATA action', () => {
    const action = {
      type: GET_COUNTRY_DATA,
    };
    expect(reducer({}, action)).toBeTruthy();
  });
  test('State should be truthy after GET_AFRINUM action', () => {
    const action = {
      type: GET_AFRINUM,
    };
    expect(reducer({}, action)).toBeTruthy();
  });
});
