import React from 'react'
import { it, expect, describe } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import LandingPage from '..//src/components/LandingPage'
import { MemoryRouter } from 'react-router-dom'

describe('LandingPage', () => {
    it('should render the name Yen Highjack in the page', () => {
        const { getAllByRole } = render(<MemoryRouter><LandingPage /></MemoryRouter>)

        // const heading = screen.getAllByRole('heading');
        // expect(heading[0]).toBeInTheDocument();
        expect(getAllByRole('heading')[0]).toBeInTheDocument();
    })
})