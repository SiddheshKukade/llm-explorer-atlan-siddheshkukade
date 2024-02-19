import { Box, Flex, Heading, Text, keyframes } from '@chakra-ui/react'
import React from 'react'
import FeaturedModalCard from './FeaturedModelCard/FeaturedModelCard'

const FeaturedModels = ({ featuredData, isLoading }) => {
    const shimmer = keyframes`
    0% {
      background-position: -200%;
    }
    100% {
      background-position: 200%;
    }
  `;
    return (
        <Flex pl={5} direction={"column"} >
            <Heading fontWeight={400} py={3}>
                Models of the week
            </Heading>
            {
                isLoading ? (
                    <Box  display={"flex"} gap={4} w={"100%"}>                    <Box
                        px={1}
                        maxW={"20vw"}
                        minH={"20vh"}
                        w={"100%"}

                        // Adjust the height as needed
                        // bgGradient="linear(to-r, #e0e0e0, #a0a0a0, #9ca3af)"
                        bgGradient="linear(to bottom right, #e0e0e0,  #e2e2e2,#e4e4e4, ,#e5e5e5,,#e6e6e6, #e7e7e7 ,#e8e8e8)"

                        bgSize="200% 100%"
                        animation={`${shimmer} 1.5s infinite linear`}
                        borderRadius="md"
                    >
                    </Box>
                    <Box
                        px={1}
                        maxW={"20vw"}
                        minH={"20vh"}
                        w={"100%"}

                        // Adjust the height as needed
                        bgGradient="linear(to bottom right, #e0e0e0,  #e2e2e2,#e4e4e4, ,#e5e5e5,,#e6e6e6, #e7e7e7 ,#e8e8e8)"
                        bgSize="200% 100%"
                        animation={`${shimmer} 1.5s infinite linear`}
                        borderRadius="md"
                    >

                    </Box>
                    <Box
                        px={1}
                        maxW={"20vw"}
                        minH={"20vh"}
                        w={"100%"}

                        // Adjust the height as needed
                        bgGradient="linear(to bottom right, #e0e0e0,  #e2e2e2,#e4e4e4, ,#e5e5e5,,#e6e6e6, #e7e7e7 ,#e8e8e8)"
                        bgSize="200% 100%"
                        animation={`${shimmer} 1.5s infinite linear`}
                        borderRadius="md"
                    >

                    </Box>
                    <Box
                        px={1}
                        maxW={"20vw"}
                        minH={"20vh"}
                        w={"100%"}

                        // Adjust the height as needed
                        bgGradient="linear(to bottom right, #e0e0e0,  #e2e2e2,#e4e4e4, ,#e5e5e5,,#e6e6e6, #e7e7e7 ,#e8e8e8)"
                        bgSize="200% 100%"
                        animation={`${shimmer} 1.5s infinite linear`}
                        borderRadius="md"
                    >

                    </Box>
                    </Box> 
                ) : ( <Flex pb={3} overflowX={"scroll"} scrollBehavior={"smooth"} direction={"row"} maxW={"80vw"} gap={3}>
                {
                    //filtering to skip un-readable model names
                    featuredData.slice(2,10).map((modal, idx) => (
                        <FeaturedModalCard
                            gradientNo={idx}
                            key={idx}
                            modal={modal} />
                    ))
                }
            </Flex>)
            }
           
        </Flex>
    )
}

export default FeaturedModels