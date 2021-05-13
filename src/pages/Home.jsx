import React from "react";
import { Heading, Box, Center, Button } from "@chakra-ui/react";
import bg from "../assets/bg.jpg";

export const Home = () => (
  <Box background={`url('${bg}') center / cover no-repeat`} height="100vh">
    <Center h="100vh">
      <div>
        <Heading color="white" textAlign="center" mb="4">
          Welcome!
        </Heading>
        <Button>Ready for something new?</Button>
      </div>
    </Center>
  </Box>
);
