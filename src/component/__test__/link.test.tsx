import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';
import Link from"../Link"

describe("<Link>", () => {
  test("component renders as expected to", () => {
    const container = render(<Link />)
    expect(screen.getByText('Default Link')).toBeDefined()
    // screen.debug()
    expect(container).toMatchSnapshot()
  })

  it("should accept and display props", () => {

    const link = "https://google.com/"
    const label = "Search on Google"

    const linkContainer = render(<Link page={link}>{label}</Link>)
    const linkElement = screen.getByRole('link');
    // screen.debug(linkElement)
    expect(linkElement).toHaveAttribute('href', link)
    expect(linkElement).toHaveAttribute('class', 'normal')
    expect(linkContainer.getByText(label)).toBeInTheDocument()
    screen.debug(linkContainer.getByText(label))

    expect(linkElement).toMatchSnapshot()

  })
})
