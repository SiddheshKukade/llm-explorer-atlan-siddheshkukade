import React, { useState } from 'react'
import { Box, Flex, Tag, TagLabel, TagLeftIcon, Text, Tooltip, keyframes } from "@chakra-ui/react"
import moment from 'moment'

import { BiDownload } from 'react-icons/bi'
import { CiHeart } from "react-icons/ci";
import { IoAddCircleOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { convertToK } from '../../../utlis/utils';
import RandomIconGenerator from '../../RandomIconGenerator/RandomIconGenerator';

const FeaturedModalCard = ({ modal, gradientNo }) => {
    const shimmer = keyframes`
    0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
      
  `;
    const styleGradients = [
        "linear-gradient(to right, #8e2de2, #4a00e0)",
        "linear-gradient(to bottom right, #DA2E71, #F04F60, #DA5A42, #F06743 ,#DB6631,#D96D23,#D87315)",
        "linear-gradient(to bottom right, #8B41FF , #9749E5, #AD57B9, #B7626F, #DA7653, #CF7036)",
        "linear-gradient(to bottom right, #EE2C33 , #C22F4E ,#AC356D, #B93C7F, #9D43A3 ,#8B3C9C, #7940B3,#7249DB)",
        "linear-gradient(to bottom right, #2D6CFC, #3060CA, #3B66CA, #375DB0, #496399, #4B618A, #4D6186, #4D6082)",
        "linear-gradient(to right, #8e2de2, #4a00e0)",
        "linear-gradient(to bottom right, #DA2E71, #F04F60, #DA5A42, #F06743 ,#DB6631,#D96D23,#D87315)",
    ]
    function getRandomElementFromArray(array) {
        if (Array.isArray(array) && array.length > 0) {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        } else {
            console.error("Input is not a valid non-empty array.");
            return null; // or any default value you prefer
        }
    }

    return (
        <Tooltip alignSelf={"center"} label={`open ${modal.id} model`} >
            <Link to={`models/${modal.id}`}>
                <Box minW={"20vw"}
                    maxH={"25vh"}
                    minH={"25vh"}
                    h={"25vh"}
                    _hover={{
                        shadow: "md", // Change the shadow on hover to "md"
                        borderColor: "linear(to-r, #61defc, #61defc, #372bc9, #953b9e, #c6458a, #e14b7f, violet)",
                        border: "1px solid  #372bc9",

                    }}
                    bgGradient={styleGradients[gradientNo]}
                    justifyContent={"space-between"}
                    cursor={"pointer"} shadow={"sm"} display={"flex"} flexDirection={"column"} w={"80%"} backgroundColor={"#fff"} p={4} direction={"column"} borderRadius={10}
                    animation={`${shimmer} 5s infinite linear`}
                    px={3}
                    bgSize="200% 100%"
                >
                    <Flex direction={"column"}>
                        <Text pb={4} fontWeight={400} color={"white"} fontSize={"12px"} >{modal.id.split('/')[0]} </Text>
                        <Text pb={4} fontWeight={800} isTruncated color={"white"} fontSize={"16px"} >{modal.id.split('/')[1]} </Text>
                    </Flex>
                    <Flex gap={2} direction={"column"}>

                        <Text>
                            <Tag size={'sm'} variant='subtle' color='#3E2BC7' backgroundColor={"#D1D8FF"} display={"flex"} direction={"row"}>
                                <TagLabel px={1}>  🔥  Reached {convertToK(modal?.downloads)} downloads in {moment().diff(moment(modal.lastModified), 'days')} days</TagLabel>
                            </Tag>

                        </Text>
                        <Text>
                            <Tag size={'sm'} variant='subtle' color='#B340A2' backgroundColor={"#FFD8E6"}>
                                <TagLeftIcon boxSize='12px' as={CiHeart} />
                                Received {convertToK(modal?.likes)} likes in <TagLabel px={1}> {moment().diff(moment(modal.lastModified), 'days')} days</TagLabel>
                            </Tag>

                        </Text>
                    </Flex>

                </Box>
            </Link>
        </Tooltip>
    )
}

export default FeaturedModalCard