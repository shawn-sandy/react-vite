import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';

import App from '../App'

describe('App renders corectly', () => {

  test('renders without crashing', () => {
    render(<App />);
    expect(screen).toMatchSnapshot();

  });

  it('renders the correct text', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello Vite + React!')).toBeInTheDocument();
  });

});
