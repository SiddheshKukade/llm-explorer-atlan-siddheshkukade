import { Box, Divider, Flex, Heading, SimpleGrid, Tag, TagLabel, TagLeftIcon, TagRightIcon, Text } from '@chakra-ui/react'
import React from 'react'
import { CiImageOn } from "react-icons/ci"; import { IoIosGlobe } from "react-icons/io";
import { SiTableau } from "react-icons/si";
import { IoMdSettings } from 'react-icons/io'
import { SiUnlicense } from "react-icons/si";
import { GrDocumentImage } from "react-icons/gr"; import { LuTableProperties } from "react-icons/lu";
import { LuTable2 } from "react-icons/lu"; import { RiDatabaseLine } from "react-icons/ri";
import { LuLayers } from "react-icons/lu";
import { AiTwotoneFileImage } from "react-icons/ai"; import { BsDatabaseCheck } from "react-icons/bs";
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