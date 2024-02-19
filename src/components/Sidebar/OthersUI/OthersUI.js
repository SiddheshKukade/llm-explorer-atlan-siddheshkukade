import { Box, Divider, Flex, Heading, SimpleGrid, Tag, TagLabel, TagLeftIcon, TagRightIcon, Text } from '@chakra-ui/react'
import React from 'react'
const OthersUI = () => {
    return (
        <Flex h={"100%"} overflow={"scroll"} direction={"column"}>
            <Flex direction={"column"}>
                <Flex gap={4} py={2}>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>art</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>Trained with AutoTrain</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>code</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>medical</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>biology</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>leagal</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>finance</TagLabel>
                    </Tag>

                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>music</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>chemistry</TagLabel>
                    </Tag>
                </Flex>

              
                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>climate</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>Synthetic</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>webdataset</TagLabel>
                    </Tag>
                </Flex>

                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme='' borderRadius={10} border={"1px solid gray"}>


                        <TagLabel>crossiant</TagLabel>
                    </Tag>

                </Flex>
            </Flex>


        </Flex>


    )
}

export default OthersUI