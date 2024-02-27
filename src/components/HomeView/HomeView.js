import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Sidebar } from '../Sidebar/Sidebar'
import ModelsView from '../ModelsView/ModelsView'
//This component is the homepage of HomeView 
const HomeView = () => {
  return (
    <Flex width={"100vw"} height={"100vh"} direction={"column"}>
      <Navbar />

      <Box minH={"100vh"} display={"flex"} flexDirection={"row"} bg={useColorModeValue("gray.100", 'gray.900')}>
        <Sidebar
          pl={20}
          display={{ base: 'none', lg: 'block' }}
          minW={"30vw"}
        />
        <ModelsView />

      </Box>

    </Flex>
  )
}

export default HomeView