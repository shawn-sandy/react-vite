import React from 'react';

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App'

describe('<App>', () => {

    it('the title is visible', () => {
      render(<App />)
      expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
    })

})
