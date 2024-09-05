import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import Todos from './Todos'
  
export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Todos />
    </QueryClientProvider>
  )
}
