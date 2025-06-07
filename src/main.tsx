import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider,createSystem, defaultConfig } from '@chakra-ui/react'

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



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
