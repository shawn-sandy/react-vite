import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';
import Link from"./Link"

describe("<Link>", () => {
  test("component renders as expected to", () => {
    const container = render(<Link />)
    expect(screen.getByText('Default Link')).toBeDefined()
    screen.debug()
    expect(container).toMatchSnapshot()
  })

  it("should accept props", () => {

    const link = "https://google.com/"
    const label = "Search on Google"

    const linkContainer = render(<Link page={link}>{label}</Link>)
    const linkElement = screen.getByRole('link');
    screen.debug(linkElement)
    expect(screen.getByText(label)).toBeDefined()
    expect(linkContainer).toMatchSnapshot()
    screen.debug()

  })
})
