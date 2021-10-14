import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Info from './Info';

describe('Info page snapshot', () => {
    test('renders correct snapshot', () => {
      const tree = renderer
        .create(        
        <Router>
            <Info />
            </Router>)

        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  test('renders Info component', () => {
    render(
        <Router>
          <Info />
        </Router>,
      )
    expect(screen.getByText('Info')).toBeInTheDocument();
    expect(screen.getByText('GENERAL')).toBeInTheDocument();
    expect(screen.getByText('SOURCES')).toBeInTheDocument();
    expect(screen.getByText('DEVELOPER')).toBeInTheDocument();
  });
