import * as React from 'react'
import { Box, Image, Flex } from '@chakra-ui/react'
import { useOffers } from '../hooks'

// eslint-disable-next-line react/prop-types
const Card = ({ imageUrl }) => {
  return (
    <Box maxW="sm" borderRadius="md" overflow="hidden" shadow="base">
      <Image src={imageUrl} />
      <Box p="4">
        <h1>Hello</h1>
      </Box>
    </Box>
  )
}

export const Gallery = () => {
  const { data } = useOffers()
  return (
    <>
      <Flex px="80px" py="40px" flexWrap="wrap" justify="space-around">
        {data.map(({ id, thumbnail }) => (
          <Card key={id} imageUrl={thumbnail} />
        ))}
      </Flex>
    </>
  )
}
