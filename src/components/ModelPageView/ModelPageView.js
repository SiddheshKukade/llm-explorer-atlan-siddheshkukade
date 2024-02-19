import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Flex, Text, Box, Spacer, Divider, Tag, TagLeftIcon, TagLabel, IconButton, useToast, useColorModeValue, Heading, Spinner, Center, Link, Code, Mark, Avatar } from '@chakra-ui/react';
import { CiHeart, CiImageOn } from 'react-icons/ci';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { convertToK, getFirstTypeName, shuffleArray } from '../../utlis/utils';
import { BiCopy } from 'react-icons/bi';
import { keyframes } from "@emotion/react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoLinkExternal } from "react-icons/go";
import { LuLayers } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';
import { graphData } from '../../constants/graphData';
import ModelInteractUI from '../ModelInteractUI/ModelInteractUI';
const ModelPageView = () => {
    const ColoredDivider = () => {
        return (
            <Box
                w="100%"
                h="2px"
                my={4}
                bgGradient="linear(to-r, #61defc, #61defc, #372bc9, #953b9e, #c6458a, #e14b7f, violet)"
            />
        );
    };
    const { modelId1, modelId2 } = useParams();
    const toast = useToast();
    console.log(modelId1, modelId2)
    const [markdownContent, setMarkdownContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modelData, setModelData] = useState();




    const handleClickCopy = () => {
        toast(
            {
                title: `${modelData?.id} copied to clipboard`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            }
        )
    }
    const shimmer = keyframes`
    0% {
      background-position: -200%;
    }
    100% {
      background-position: 200%;
    }
  `;
    useEffect(() => {
        fetch('https://huggingface.co/stabilityai/stable-cascade/raw/main/README.md')
            .then(response => {
                console.log(response)
                return response.text()
            })
            .then(data => {
                console.log("data", data);
                setMarkdownContent(data)
            })
            .catch(error => console.error('Error fetching markdown content:', error));
    }, []);
    useEffect(() => {
        let repo_id = modelId1 + "/" + modelId2
        const loadData = async () => {
            setIsLoading(true);
            try {
                let fetchmodel = await axios.get(`https://huggingface.co/api/models/${repo_id}`)
                console.log(fetchmodel?.data, "ds")
                setModelData(fetchmodel.data)
            } catch (e) {
                toast(
                    {
                        title: `Problem with the API. Please try again later`,
                        status: 'erorr',
                        duration: 3000,
                        isClosable: true,
                    }
                )
            }

            setIsLoading(false);
            // fetch(

        }
        loadData();



    }, [])

    return (
        <Flex overflowY={"scroll"} width={"100vw"} h={"100vh"} direction={"column"}>
            <Navbar />
            <Box minH={"20vh"} display={"flex"} flexDirection={"column"} bg={useColorModeValue("gray.100", 'gray.900')}>
                {isLoading ?

                    <Center >
                        <Flex height={"90vh"} mt={10} gap={3} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                            <Spinner />
                            <Text>Waiting for Huggingface API</Text>
                            <Text fontWeight={300} color={"gray"}>
                                Huggingface Public API might have rate limiting. If taking too much time to load. Please refresh.
                            </Text>
                            <Link textDecoration={"underline"} href='https://github.com/SiddheshKukade' isExternal>
                                <Text display={"flex"} direction={"row"} alignItems={"center"} gap={2}>Made with ❤️  By
                                    <Avatar src='https://avatars.githubusercontent.com/u/65951872?v=4' />
                                    @SiddheshKukade <GoLinkExternal mx='2px' />
                                </Text>
                            </Link>
                        </Flex>

                    </Center>
                    : (
                        <>
                            {/* Heading */}
                            <Flex w={"100vw"}
                                ml={20}

                                mr={20}>
                                <Flex mt={10} maxH={"5vh"} alignItems={"center"} >
                                    <Heading size={"lg"} display={"flex"} gap={1}>
                                        <Text fontWeight={
                                            300} color={"darkgray"}>  {modelId1} /</Text>
                                        <Text>  {modelId2}</Text>
                                    </Heading>
                                    <IconButton size={"lg"} icon={<BiCopy />} variant={"ghost"} onClick={handleClickCopy} />
                                    <Text display={"flex"} gap={1} alignItems={"center"} flexDirection={"row"}>
                                        <Tag size={'md'} key={1} variant='subtle' color='#B340A2' backgroundColor={"#FFD8E6"}>
                                            <TagLeftIcon boxSize='12px' as={CiHeart} />
                                            <TagLabel px={1}> like     {convertToK(modelData?.likes)}
                                            </TagLabel>
                                        </Tag>
                                    </Text>
                                </Flex>
                            </Flex>
                            {/* Tags */}
                            <Flex
                                ml={20}
                                mr={20}
                                mt={3} maxH={"5vh"} maxW={"70vw"} alignItems={"center"} gap={3} >
                                {modelData?.tags?.length > 0 ?
                                    modelData?.tags?.slice(0, 6).map((tag, idx) => (
                                        <>
                                            <Tag minW={"fit-content"} key={idx} size={'md'} variant='subtle' color='#8037A7' backgroundColor={"#EDE7F6"}>
                                                <TagLabel px={1}>  {tag}
                                                </TagLabel>
                                            </Tag>
                                        </>
                                    ))

                                    : ""}
                            </Flex>

                        </>
                    )}

            </Box>
            <Tabs colorScheme={"#6c28d9"} w={"100%"}>
                <TabList bg={useColorModeValue("gray.100", 'gray.900')} w={"100vw"} display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                    <Center>
                        {!isLoading ? (<Tab> <Heading size={"md"} display={"flex"} gap={1} color={"#52525b"}>Details</Heading></Tab>) : ""}
                        {!isLoading ? (<Tab><Heading size={"md"} display={"flex"} gap={1} color={"#52525b"}>Interact with Model</Heading></Tab>) : ""}
                    </Center>

                </TabList>

                <TabPanels>
                    <TabPanel>
                        {
                            isLoading ? "" :
                                <Box h={"100%"} w={"80%"} ml={20} overflow={"scroll"}
                                    mr={20} display={"flex"} direction={"row"} >
                                    <Flex direction={"column"} w={"60%"}>
                                        <Flex mt={5} h={"5%"} justifyContent={"flex-start"} gap={10} pr={10}>
                                            {modelData?.safetensors?.total?.toLocaleString()?.length > 0 ? (<Flex direction={"column"} >
                                                <Text fontWeight={700} fontSize={"1.5rem"} color={"gray"}>
                                                    {modelData?.safetensors?.total?.toLocaleString()}
                                                </Text>
                                                <Text fontWeight={400} fontSize={"1.2rem"} color={"gray"}>
                                                    Parameters
                                                </Text>
                                            </Flex>) : ""}
                                            {getFirstTypeName(modelData?.safetensors?.parameters)?.toLocaleUpperCase().length > 0 ? (<Flex direction={"column"} >
                                                <Text fontWeight={700} fontSize={"1.5rem"} color={"gray"}>
                                                    {getFirstTypeName(modelData?.safetensors?.parameters)?.toLocaleUpperCase()}
                                                </Text>
                                                <Text fontWeight={400} fontSize={"1.2rem"} color={"gray"}>
                                                    Tensor Type
                                                </Text>
                                            </Flex>) : ""}

                                            <Flex direction={"column"} >
                                                <Text fontWeight={700} fontSize={"1.5rem"} color={"gray"}>
                                                    {modelData?.downloads?.toLocaleString()}
                                                </Text>
                                                <Text fontWeight={400} fontSize={"1.2rem"} color={"gray"}>
                                                    Downloads last month
                                                </Text>
                                            </Flex>
                                            <ResponsiveContainer width="50%" height="100%">
                                                <AreaChart
                                                    width={500}
                                                    height={400}
                                                    data={shuffleArray(graphData)}
                                                    margin={{
                                                        top: 10,
                                                        right: 30,
                                                        left: 0,
                                                        bottom: 0,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                                </AreaChart>
                                            </ResponsiveContainer>

                                        </Flex>
                                        <ColoredDivider />

                                        <Flex direction={"row"} alignItems={"center"} gap={5}>
                                            <Flex direction={"column"} >
                                                <Text fontWeight={700} fontSize={"1.5rem"} color={"gray"}>
                                                    Datasets
                                                </Text>
                                                <Text fontWeight={400} fontSize={"1.2rem"} color={"gray"}  >
                                                    used to train   <Code>{modelData?.id?.toLocaleString()}</Code>
                                                </Text>
                                            </Flex>
                                            <Flex >
                                                {modelData?.cardData?.datasets?.length > 0 ?
                                                    (<>   <Flex maxH={"10%"} gap={4} px={4} py={2}>
                                                        {modelData?.cardData?.datasets[0] &&
                                                            (<Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                                                                <TagLeftIcon boxSize='12px' as={LuLayers} />
                                                                <TagLabel>{modelData?.cardData?.datasets[0]} </TagLabel>
                                                            </Tag>)}
                                                        {modelData?.cardData?.datasets[1] &&
                                                            (
                                                                <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                                                                    <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                    <TagLabel>{modelData?.cardData?.datasets[1]}</TagLabel>
                                                                </Tag>)}
                                                    </Flex>
                                                        <Flex gap={4} px={4} py={2}>
                                                            {modelData?.cardData?.datasets[2] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.cardData?.datasets[2]}</TagLabel>
                                                                    </Tag>)}
                                                            {modelData?.cardData?.datasets[3] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='gray'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.cardData?.datasets[3]}</TagLabel>
                                                                    </Tag>)}
                                                        </Flex>
                                                    </>

                                                    )
                                                    : <></>}
                                            </Flex>
                                        </Flex>

                                        <ColoredDivider />

                                        <Flex direction={"row"} alignItems={"center"} gap={5}>
                                            <Flex direction={"column"} >
                                                <Text fontWeight={700} fontSize={"1.5rem"} color={"gray"}>
                                                    Spaces
                                                </Text>
                                                <Text fontWeight={400} fontSize={"1.2rem"} color={"gray"}>
                                                    used to train <Code>{modelData?.id?.toLocaleString()}</Code>
                                                </Text>

                                            </Flex>
                                            <Flex direction={"column"}>
                                                {modelData?.spaces?.length > 0 ?
                                                    (<>   <Flex maxH={"10%"} gap={4} px={4} py={2}>
                                                        {modelData?.spaces[0] &&
                                                            (<Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                <TagLeftIcon boxSize='12px' as={LuLayers} />
                                                                <TagLabel>{modelData?.spaces[0]} </TagLabel>
                                                            </Tag>)}
                                                        {modelData?.spaces[1] &&
                                                            (
                                                                <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                    <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                    <TagLabel>{modelData?.spaces[1]}</TagLabel>
                                                                </Tag>)}
                                                    </Flex>
                                                        <Flex gap={4} px={4} py={2}>
                                                            {modelData?.spaces[2] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.spaces[2]}</TagLabel>
                                                                    </Tag>)}
                                                            {modelData?.spaces[3] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.spaces[3]}</TagLabel>
                                                                    </Tag>)}
                                                        </Flex>
                                                        <Flex gap={4} px={4} py={2}>
                                                            {modelData?.spaces[4] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.spaces[4]}</TagLabel>
                                                                    </Tag>)}
                                                            {modelData?.spaces[5] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.spaces[5]}</TagLabel>
                                                                    </Tag>)}
                                                        </Flex>
                                                        <Flex gap={4} px={4} py={2}>
                                                            {modelData?.spaces[6] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.spaces[6]}</TagLabel>
                                                                    </Tag>)}
                                                            {modelData?.spaces[7] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.spaces[7]}</TagLabel>
                                                                    </Tag>)}
                                                        </Flex>
                                                        <Flex gap={4} px={4} py={2}>
                                                            {modelData?.spaces[8] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.spaces[8]}</TagLabel>
                                                                    </Tag>)}
                                                            {modelData?.spaces[9] &&
                                                                (
                                                                    <Tag cursor={"pointer"} size={'sm'} key={'1'} variant='outline' colorScheme='yellow'>
                                                                        <TagLeftIcon boxSize='12px' as={CiImageOn} />
                                                                        <TagLabel>{modelData?.spaces[9]}</TagLabel>
                                                                    </Tag>)}
                                                        </Flex>
                                                    </>
                                                    )
                                                    : <></>}

                                            </Flex>
                                        </Flex>
                                    </Flex>
                                    <Flex textSize={"24px"} overflow={"scroll"} p={5} direction={"column"} w={"40%"}>
                                        <Flex direction={"column"}>
                                            <Heading color={"#808080"} direction={"column"}  >
                                                Documentation
                                            </Heading>
                                            <Text display={"flex"} alignItems={"center"} cursor={"pointer"} color={"gray"} gap={1} >
                                                <Box
                                                    px={1}
                                                    // Adjust the height as needed
                                                    bgGradient="linear(to-r, #FFD6D6, #FFA5A5, #FFD6D6)"
                                                    bgSize="200% 100%"
                                                    animation={`${shimmer} 1.5s infinite linear`}
                                                    borderRadius="md"
                                                >
                                                    <Text color={"red"}> LIVE </Text>
                                                </Box>

                                                fetched from <Code>README.md</Code> file of the model.
                                            </Text>
                                            <ColoredDivider />
                                        </Flex>
                                        <Flex textOverflow={"hidden"}   overflow={"scroll"} direction={"column"}  h={"100%"}>


                                            <ReactMarkdown overflowY={"scroll"} children={markdownContent} skipHtml={true} >

                                            </ReactMarkdown>
                                        </Flex>
                                    </Flex>
                                </Box>
                        }
                    </TabPanel>
                    <TabPanel>
                        <ModelInteractUI  model={modelData}/>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </Flex >


    )
}

export default ModelPageView