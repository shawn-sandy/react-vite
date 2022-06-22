import React from 'react';

import { describe, expect, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App'

describe('<App>', () => {

  test('App component should render correctly', () => {
    const Component = render(<App/>)


    const logo = screen.getByRole('img', {  name: /logo/i});
    screen.debug(logo)

    expect(Component).toMatchSnapshot();
    expect(Component.getAllByRole('link', { name: /learn react/i})).toBeDefined()
    expect(Component.getByRole('link', { name: /vite docs/i})).toBeDefined()
    expect(Component.getByRole('button', {  name: /count is: 0/i})).toBeDefined()
  })
})
