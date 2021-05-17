import * as React from 'react'
import { Flex, Input, Center, Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import hero from '../../assets/hero.jpg'

export const Hero = ({ setSearchCountry }) => {
  return (
    <Flex
      backgroundImage={`url('${hero}')`}
      backgroundPosition="center"
      h="40vh"
      backgroundSize="100% 100%"
      backgroundRepeat="no-repeat"
      px="80px"
      alignItems="center"
    >
      <Center h="30vh">
        <div>
          <Heading mb="2" fontWeight="bold" color="white" fontSize="3xl" textAlign="center">
            Find place
          </Heading>
          <Input
            onChange={(e) => setSearchCountry(e.target.value)}
            placeholder="search"
            color="white"
          />
        </div>
      </Center>
    </Flex>
  )
}
Hero.propTypes = {
  setSearchCountry: PropTypes.func,
}
