import { Box, Divider, Flex, Heading, SimpleGrid, Tag, TagLabel, TagLeftIcon, TagRightIcon, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { SiTableau } from "react-icons/si";
import { IoMdSettings } from 'react-icons/io'
import { GrDocumentImage } from "react-icons/gr";import { LuTableProperties } from "react-icons/lu";
import { LuTable2 } from "react-icons/lu";import { RiDatabaseLine } from "react-icons/ri";
import { LuLayers } from "react-icons/lu";
import { AiTwotoneFileImage } from "react-icons/ai";import { BsDatabaseCheck } from "react-icons/bs";
const TasksUI = () => {
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
        <Flex overflow={"scroll"} direction={"column"}>
            <Flex direction={"column"}>
                <Text fontWeight={700} color={"#6B7280"}>
                    Multimodal
                </Text>

                {/* <SimpleGrid columns={2} spacing={1}> */}
                <Flex gap={4} px={4} py={2}>
                    <Tag  onClick={handleTagClick}  cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                    <TagLeftIcon boxSize='12px' as={LuLayers} />
                        <TagLabel>Feature Extraction</TagLabel>
                    </Tag>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                    <TagLeftIcon boxSize='12px' as={CiImageOn} />
                        <TagLabel>Text-To-Image</TagLabel>
                    </Tag>

                </Flex>
                <Flex gap={4} px={4} py={2}>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                    <TagLeftIcon boxSize='12px' as={LuLayers} />
                        <TagLabel>Image-to-Text</TagLabel>
                    </Tag>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                    <TagLeftIcon boxSize='12px' as={LuLayers} />
                        <TagLabel>Image-to-Video</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} px={4} py={2}>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={LuLayers} />
                        <TagLabel>Text-To-Video</TagLabel>
                    </Tag>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                    <TagLeftIcon boxSize='12px' as={GrDocumentImage} />
                        <TagLabel> Question Answering</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} px={4} py={2}>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={SiTableau} />
                        <TagLabel>Graph Machine Learning</TagLabel>
                    </Tag>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={AiTwotoneFileImage} />
                        <TagLabel>Text-to-3D</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} px={4} py={2}>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={LuLayers} />
                        <TagLabel>Image-to-3D</TagLabel>
                    </Tag>

                </Flex>
                {/* </SimpleGrid> */}
            </Flex>
            <Divider  pt={4}/>

            <Flex direction={"column"} pt={4}>

                <Text fontWeight={700} color={"#6B7280"}>
                    Computer Vision
                </Text>

         
              
                <Flex gap={4} px={4} py={2}>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={LuTable2} />
                        <TagLabel>Image to Image</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} px={4} py={2}>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={RiDatabaseLine} />
                        <TagLabel>Unconditional Image Generation</TagLabel>
                    </Tag>

                </Flex>
                <Flex gap={4} px={4} py={2}>
                 
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={BsDatabaseCheck} />
                        <TagLabel>Text-to-3D</TagLabel>
                    </Tag>
                </Flex>
                <Flex gap={4} px={4} py={2}>
                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={LuLayers} />
                        <TagLabel>Video Classification</TagLabel>
                    </Tag>

                </Flex>
                <Flex gap={4} px={4} py={2}>

                    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                          <TagLeftIcon boxSize='12px' as={RiDatabaseLine} />
                        <TagLabel>Zero-Shot-Object Detection</TagLabel>
                    </Tag>
                </Flex>
                {/* </SimpleGrid> */}
            </Flex>
 
            <Flex direction={"column"} pt={4}>

<Text fontWeight={700} color={"#6B7280"}>
    Natural Language Processing
</Text>

 
<Flex gap={4} px={4} py={2}>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={AiTwotoneFileImage} />
    <TagLabel>Table Question Answering</TagLabel>
    </Tag>
</Flex>
<Flex gap={4} px={4} py={2}>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={LuLayers} />
    <TagLabel>Question Answering</TagLabel>
    </Tag>
</Flex>
<Flex gap={4} px={4} py={2}>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={AiTwotoneFileImage} />
        <TagLabel>Zero Shot Classification</TagLabel>
    </Tag>
</Flex>
<Flex gap={4} px={4} py={2}>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={LuTableProperties} />
        <TagLabel>Translation</TagLabel>
    </Tag>

</Flex>
<Flex gap={4} px={4} py={2}>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={GrDocumentImage} />
        <TagLabel>Summarization</TagLabel>
    </Tag>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={LuLayers} />
        <TagLabel>Conversational</TagLabel>
    </Tag>
</Flex>
 

</Flex>

<Text fontWeight={700} color={"#6B7280"}>
Tabular</Text>

{/* <SimpleGrid columns={2} spacing={1}> */}
<Flex gap={4} px={4} py={2}>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={LuTableProperties} />
        <TagLabel>Tabular Classification </TagLabel>
    </Tag>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={GrDocumentImage} />
        <TagLabel>Time Series</TagLabel>
    </Tag>

</Flex>

<Flex gap={4} px={4} py={2}>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={LuTableProperties} />
    <TagLabel>Table to Text</TagLabel>
    </Tag>
    <Tag onClick={handleTagClick} cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
          <TagLeftIcon boxSize='12px' as={GrDocumentImage} />
        <TagLabel>Tabular Regression</TagLabel>
    </Tag>
 
</Flex>

 
{/* </SimpleGrid> */}
</Flex>


    )
}

export default TasksUI