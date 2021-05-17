import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Offers } from './pages/Offers'
import { Gallery } from './pages/Gallery'

export const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="offers" element={<Offers />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
