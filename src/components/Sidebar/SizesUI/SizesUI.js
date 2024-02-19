import {  Flex , Tag, TagLabel, Text, useToast } from '@chakra-ui/react'
import React from 'react'
const SizesUI = () => {
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
        <Flex h={"100%"} overflow={"scroll"} onClick={handleTagClick} direction={"column"}>
            <Flex direction={"column"}>
              

                {/* <SimpleGrid columns={2} spacing={1}> */}
                <Flex gap={4} px={4} py={2}>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                        <TagLabel>{`10K<n<100K`}</TagLabel>
                    </Tag>
                    </Flex>

         
                <Flex gap={4} px={4} py={2}>
                <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                        <TagLabel>{`1M<n<10M`}</TagLabel>
                    </Tag>

                </Flex>
                    <Flex gap={4} px={4} py={2}>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                        <TagLabel>{`1K<n<10K`}</TagLabel>
                    </Tag>
                    </Flex>
                    <Flex gap={4} px={4} py={2}>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                        <TagLabel>{`n<1K`}</TagLabel>
                    </Tag>
                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                        <TagLabel>{`100K<n<1M`}</TagLabel>
                    </Tag>
                </Flex>
            </Flex>

 
</Flex>


    )
}

export default SizesUI