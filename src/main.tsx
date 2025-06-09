import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider,createSystem, defaultConfig } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        bg: { value: '#1A202C' }, // gray.800
      },
    },
  },
})

const queryClient = new QueryClient();



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
