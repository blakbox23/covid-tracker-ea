import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Nav from './Nav';

describe('Nav snapshot', () => {
    test('renders correctly', () => {
      const shot = renderer
        .create(
          <Router>
            <Nav />
          </Router>,
        )
        .toJSON();
      expect(shot).toMatchSnapshot();
    });
  });

  test('Render logo', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    expect(screen.getByText('Covid in Africa')).toBeInTheDocument();
  });