import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages/Home'

export const App = () => (
  <ChakraProvider>
    <Home />
  </ChakraProvider>
)
