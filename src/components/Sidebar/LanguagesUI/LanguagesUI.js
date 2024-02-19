import { Box, Divider, Flex, Heading, SimpleGrid, Tag, TagLabel, TagLeftIcon, TagRightIcon, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { CiImageOn } from "react-icons/ci"; import { IoIosGlobe } from "react-icons/io";
import { SiTableau } from "react-icons/si";
import { IoMdSettings } from 'react-icons/io'
import { GrDocumentImage } from "react-icons/gr"; import { LuTableProperties } from "react-icons/lu";
import { LuTable2 } from "react-icons/lu"; import { RiDatabaseLine } from "react-icons/ri";
import { LuLayers } from "react-icons/lu";
import { AiTwotoneFileImage } from "react-icons/ai"; import { BsDatabaseCheck } from "react-icons/bs";
const LanguagesUI = () => {
    const toast = useToast();
    const handleTagClick = ()=>{
        toast({
            title: `Please use modal search.`,
            description: "This is a demo sidebar, Please use search from the model section.",
            status: 'info',
            duration: 7000,
            isClosable: true,
        })
    }
    return (
        <Flex onClick={handleTagClick} h={"100%"} overflow={"scroll"} direction={"column"}>
            <Flex direction={"column"}>
                <Flex gap={4} py={2}>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>English</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Chinese</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>French</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Spanish</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>German</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Russian</TagLabel>
                    </Tag>
                </Flex>

                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Japenese</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Portuguese</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Korean</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Arabic</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Italian</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Vietnamese</TagLabel>
                    </Tag>
                </Flex>

                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Polish</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Hindi</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Dutch</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={IoIosGlobe} />

                        <TagLabel>Urdu</TagLabel>
                    </Tag>
                </Flex>
            </Flex>


        </Flex>


    )
}

export default LanguagesUI