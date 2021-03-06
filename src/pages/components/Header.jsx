import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Text } from '@chakra-ui/react'
// import { NavLink } from '/Users/stefanhancar/Downloads/react-travel/src/pages/components/NavLink.jsx'
import { NavLink } from './NavLink'

export const Header = () => {
  return (
    <>
      <Box as="header" p="4" shadow="base">
        <Container
          maxWidth="container.xl"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <Text
              as="h2"
              fontWeight="bold"
              bgGradient="linear(to-r,pink.800, pink.300,blue.500)"
              bgClip="text"
            >
              RELAX & FUN
            </Text>
          </Link>

          <nav>
            <NavLink to="/">Home</NavLink>

            <NavLink to="/offers">Offers</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </nav>
        </Container>
      </Box>
    </>
  )
}
