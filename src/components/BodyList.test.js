import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import BodyList from './BodyList';
import store from '../redux/configureStore';

describe('Home snapshot', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>

          <Provider store={store}>
            <BodyList />
          </Provider>
        </Router>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
