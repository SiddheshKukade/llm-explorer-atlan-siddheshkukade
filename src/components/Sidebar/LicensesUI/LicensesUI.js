import {  Flex,  Tag, TagLabel, TagLeftIcon, useToast } from '@chakra-ui/react'
import React from 'react'
import { SiUnlicense } from "react-icons/si";
 
const LicensesUI = () => {
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
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>mit</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>apache 2.0</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>openrail</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>cc-by-4.0</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>other</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>cc-by-sa-4.0</TagLabel>
                    </Tag>
                </Flex>

                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>cc-by-nc-4.0</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>cc-by-sa-3.0</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>gpl-3.0</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>Arabic</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>Italian</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>Vietnamese</TagLabel>
                    </Tag>
                </Flex>

                <Flex gap={4} py={2}>

                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>Polish</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>Hindi</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>Dutch</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'md'} key={'1'} colorScheme=''  borderRadius={10} border={"1px solid gray"}>
                        <TagLeftIcon boxSize='12px' as={SiUnlicense} />

                        <TagLabel>Urdu</TagLabel>
                    </Tag>
                </Flex>
            </Flex>


        </Flex>


    )
}

export default LicensesUI