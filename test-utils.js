import React from 'react'
import {render} from '@testing-library/react'

const TestWrapper = ({children}) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
        {children}
    </QueryClientProvider>
  )
}

const renderWithWrapper = (ui, options) =>
  render(ui, {wrapper: TestWrapper, ...options})

export {renderWithWrapper}

