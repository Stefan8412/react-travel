/* eslint-disable react/prop-types */
import * as React from 'react'

import { Box, Text, Image, Badge, useToast, Spinner } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { times } from 'lodash-es'
import { differenceInMonths } from 'date-fns'
import { Header } from './components/Header'
import { useOffers } from '../hooks'

const Stars = ({ filledCount }) => {
  return times(5, (i) => <StarIcon key={i} color={i < filledCount ? 'teal.500' : 'gray.300'} />)
}

const Card = ({
  imageUrl,
  numberOfNights,
  destinations,
  formattedPrice,
  rating,
  reviewsCount,
  // eslint-disable-next-line no-unused-vars
  linkTo,
  isNew,
}) => {
  return (
    <Box maxW="sm" borderRadius="md" overflow="hidden" shadow="base">
      <Image src={imageUrl} />
      <Box p="4">
        <Text fontWeight="semibold" color="gray.500" fontSize="xs" textTransform="uppercase">
          {numberOfNights} NIGHTS
        </Text>
        {isNew && (
          <Badge borderRadius="full" p="2">
            New
          </Badge>
        )}
        <Text>{destinations} </Text>
        <Text>{formattedPrice} </Text>
        <Stars filledCount={rating} />
        <Text>{reviewsCount} reviews </Text>
      </Box>
    </Box>
  )
}

export const Offers = () => {
  const { data, error, isLoading } = useOffers()
  const toast = useToast()
  if (error) {
    toast({
      status: 'error',
      tittle: 'Sorry, something went wrong',
      description: 'We are sorry',
    })
    return null
  }
  /* const [data, setData] = React.useState([])
  /*  fetch('http://localhost:3004/offers')
    .then((response) => response.json())
    .then((data) => setData(data)) */
  /* 
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3004/offers?_limit=30')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, []) */

  return (
    <>
      <Header />
      {isLoading && (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      )}

      {data.map(
        ({ id, thumbnail, nights, city, country, price, rating, reviewCount, createdAt }) => (
          <Card
            key={id}
            imageUrl={thumbnail}
            numberOfNights={nights}
            destination={`${city},${country}`}
            formattedPrice={new Intl.NumberFormat('sk', {
              style: 'currency',
              currency: 'EUR',
              maximumFractionDigits: 0,
            }).format(price)}
            rating={rating}
            reviewsCount={reviewCount}
            linkTo={`offers/${id}`}
            isNew={differenceInMonths(new Date(), new Date(createdAt)) <= 6}
          />
        )
      )}
    </>
  )
}
