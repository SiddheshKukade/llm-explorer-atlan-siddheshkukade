import {
    Image, Flex, Button, HStack, Box, Text, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    useToast,
} from '@chakra-ui/react';
import { BiBox } from "react-icons/bi";
import { CiBoxes } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { IoChatboxOutline } from "react-icons/io5";
import { SlDocs } from "react-icons/sl";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
const CTA = "Get Started"
const data = [{ label: "Help" }, { label: "Account" }]
export default function Navbar() {
    const toast = useToast()
    const handleNavClick = ()=>{
        toast({
            title: `This feature is coming soon.`,
            status: 'info',
            duration: 3000,
            isClosable: true,
        })
    }
    return (
        <Flex
            w="100%"
            px="6"
            py="5"
            align="center"
            justify="space-between"
            zIndex={300}
            pl={20}
            pr={20}

        >
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <Link to={"/"}>
                    <Image src={"https://website-assets.atlan.com/img/atlan-ai-text.webp"} h="35px" />
                </Link>
                {/* <Breadcrumb>
                <BreadcrumbItem>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Chatbots</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem >
                        <BreadcrumbLink href='#' >
                            <Text fontWeight={500} fontStyle={"bold"}>
                                SIDDHESH_KUKADE_RESUME.pdf
                            </Text>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb> */}
            </Box>

            <HStack as="nav" spacing="5" textColor={"#52525b"}>
                <Link to={"/"}>
                    <Button variant="nav" leftIcon={<BiBox />}  > Models</Button> </Link>
                    <Link to={"/create"}>
                    <Button variant="nav" leftIcon={<IoIosAdd />}  > Create a Model</Button> </Link>
                <Button variant="nav" leftIcon={<GoDatabase />} onClick={handleNavClick}  > Datasets</Button>
                <Button variant="nav" leftIcon={<IoChatboxOutline />}  > Posts</Button>
                <HStack borderLeft={"2px"} pl={3} borderColor={"gray"}>
                    <Button  onClick={handleNavClick} variant="solid" background={"white"} color={"black"}

                        _hover={{
                            backgroundColor: "darkgray",
                            color: "white"
                        }}
                    > Login</Button>
                    <Button  onClick={handleNavClick} variant="solid" background={"black"} color={"white"}

                        _hover={{
                            backgroundColor: "white",
                            color: "Black"
                        }}
                    > Sign Up</Button>
                </HStack>

            </HStack>

        </Flex>
    );
}