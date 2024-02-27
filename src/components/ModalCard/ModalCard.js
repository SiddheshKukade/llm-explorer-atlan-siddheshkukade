import React, { useState } from 'react'
import { Box, Flex, Tag, TagLabel, TagLeftIcon, Text, Tooltip } from "@chakra-ui/react"
import moment from 'moment'
import { convertToK, shuffleArray } from '../../utlis/utils'
import { BiDownload } from 'react-icons/bi'
import { CiHeart } from "react-icons/ci";
import RandomIconGenerator from '../RandomIconGenerator/RandomIconGenerator'
import { Link } from 'react-router-dom'

import { graphData } from '../../constants/graphData'

// This component renders the single card for the llm model.
const ModalCard = ({ modal }) => {

    return (
        <Tooltip alignSelf={"center"} label={`open ${modal.id} model`} >
            <Link to={`models/${modal.id}`}>

                <Box
                    _hover={{
                        shadow: "md", // Change the shadow on hover to "md"
                        borderColor: "linear(to-r, #61defc, #61defc, #372bc9, #953b9e, #c6458a, #e14b7f, violet)",
                        border: "1px solid  #372bc9",

                    }}
                    cursor={"pointer"} shadow={"sm"} display={"flex"} flexDirection={"column"} w={"80%"} backgroundColor={"#fff"} p={4} direction={"column"} borderRadius={10}>
                    <Flex >
                        <Text pb={4} fontWeight={600} color={"#52525B"} >{modal.id} </Text>
                    </Flex>
                    <Flex gap={2}>
                        <Tag size={'md'} key={'1'} variant='subtle' color='#8037A7' backgroundColor={"#EDE7F6"}>
                            <TagLeftIcon boxSize='12px' as={RandomIconGenerator} />
                            <TagLabel px={1}>{modal.pipeline_tag}</TagLabel>
                        </Tag>
                        <Text>
                            <Tag size={'md'} key={'2'} variant='subtle' color='#3E2BC7' backgroundColor={"#D1D8FF"}>
                                Updated <TagLabel px={1}> {moment().diff(moment(modal.lastModified), 'days')} days ago</TagLabel>
                            </Tag>

                        </Text>


                        <Tag size={'md'} key={'3'} variant='subtle' color='#3D8EC7' backgroundColor={"#CCE5FF"}>
                            <TagLeftIcon boxSize='12px' as={BiDownload} />
                            <TagLabel >     {convertToK(modal.downloads)}</TagLabel>
                        </Tag>
                        <Text display={"flex"} gap={1} alignItems={"center"} flexDirection={"row"}>
                            <Tag size={'md'} key={'4'} variant='subtle' color='#B340A2' backgroundColor={"#FFD8E6"}>
                                <TagLeftIcon boxSize='12px' as={CiHeart} />
                                <TagLabel px={1}>       {convertToK(modal.likes)}
                                </TagLabel>
                            </Tag>

                        </Text>

                    </Flex>




                </Box>
            </Link>
        </Tooltip>
    )
}

export default ModalCard