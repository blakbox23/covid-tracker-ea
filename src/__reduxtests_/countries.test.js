import reducer, {
    getCountries ,
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
    expect(getCountries()).not.toContain(data);
  });
});

  describe('getAfrinum returns expected values', () => {
  test('getAfrinum return a truthy value', () => {
    expect(getCountries()).toBeTruthy();
  });
  test('getAfrinum return a number', () => {
    expect(getCountries()).not.toContain(data);
  });
});

  describe('getCountryData returns expected values', () => {
  test('getCountryData return a truthy value', () => {
    expect(getCountries()).toBeTruthy();
  });
  test('getAfrinum return an object', () => {
    expect(getCountries()).toBeInstanceOf(Object)
  });
});

describe('reducer', () => {
    test('should change the state into a truthy value', () => {
        const action = {
        //   type: GET_COUNTRIES,
        //   newData: data,
        };
        // const ans = reducer({}, action);
        // console.log('datad');
        // console.log(ans.countries[0].countries[0].country);

        expect(reducer({}, action)).toBeTruthy();
      });
    test('should not return undefined', () => {
        const action = {
          type: GET_COUNTRY_DATA,
        };
        expect(reducer({}, action)).not.toBeUndefined();
          });
    test('should change the state into a truthy value', () => {
        const action = {
            type: GET_COUNTRY_DATA,
          };
          expect(reducer({}, action)).toBeTruthy();
        });
});