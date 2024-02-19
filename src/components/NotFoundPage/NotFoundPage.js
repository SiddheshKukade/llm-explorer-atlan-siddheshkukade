import { Button, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { BiBox } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Flex
      h={"100vh"} w={"100vw"} justifyContent={"center"} direction={"column"} gap={4}>
<Center>
  <Heading>
    404 Not found !
  </Heading>
</Center>
      <Center>

        We cannot find the page that you're looking for.

      </Center>
      <Center>
        <Link to={"/"}>
          <Button  leftIcon={<BiBox />} variant={"solid"} colorScheme='gray'  > Return home</Button> </Link>
      </Center>
    </Flex>
  )

}

export default NotFoundPage