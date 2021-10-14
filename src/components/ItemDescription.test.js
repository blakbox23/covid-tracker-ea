import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import ItemDescription from './ItemDescription';
import store from '../redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';


const country = 'Kenya';
it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
        <Provider store={store}>
          <ItemDescription country={country} />
        </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });