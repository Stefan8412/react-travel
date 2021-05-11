import React from 'react'
import { Heading, Box , Center} from "@chakra-ui/react"
import bg from "../assets/bg.jpg"

export const Home =()=>(
       <Box background={`url('${bg}') center / cover no-repeat`} height="100vh">
       <Center h="100vh">
            <Heading color="white">Homepage</Heading>  
            </Center>
       </Box>
     )
