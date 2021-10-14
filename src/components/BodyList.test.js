import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import BodyList from './BodyList';
import store from '../redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';


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
  