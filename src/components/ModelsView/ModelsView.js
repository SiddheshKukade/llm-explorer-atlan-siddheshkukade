import { Button, Center, Flex, Heading, IconButton, Input, Text, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spinner, useColorModeValue, useToast, Avatar, Tooltip } from '@chakra-ui/react'
import { GiCardboardBoxClosed } from "react-icons/gi";
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlinePublish } from "react-icons/md";
import { IoCodeDownloadSharp } from "react-icons/io5";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoIosSearch } from 'react-icons/io'; import { AiOutlineLike } from "react-icons/ai";
import { IoChevronDownCircleOutline } from 'react-icons/io5'; import { IoFilter } from "react-icons/io5";
import { MdBrowserUpdated } from "react-icons/md";
import axios from 'axios';
import ModalCard from '../ModalCard/ModalCard';
import { Link } from 'react-router-dom';
import { GoLinkExternal } from 'react-icons/go';
import FeaturedModels from '../FeaturedModels/FeaturedModels';
import { BiReset, BiSearch } from 'react-icons/bi';
const ModelsView = () => {
    const [loading, setLoading] = useState(false);
    const [modalsListGlobal, setModalsListGlobal] = useState([])
    const [modalsList, setModalsList] = useState([]);
    const [modalNumber, setModalNumberLimit] = useState(10);
    const searchRef = useRef(null);

    const toast = useToast()
    const loadData = async (payload) => {
        setLoading(true)
        try {
            let fetchModalData = await axios.get(`https://huggingface.co/api/models${payload}`)
            console.log(fetchModalData?.data, "ds")
            setModalsList(fetchModalData.data)
            setModalsListGlobal(fetchModalData?.data);
        } catch (e) {
            toast({
                title: `Problem with the API. Please try again later`,
                status: 'erorr',
                duration: 3000,
                isClosable: true,
            })
        }
        setLoading(false)
        // fetch(

    }
    useEffect(() => {

        loadData("?limit=100&full=true&config=true");
    }, [])
    const handleSearchFilter = (searchTerm) => {
        if (searchTerm?.length == 0) {
            setModalsList(modalsListGlobal)
        }
        setModalsList(
            modalsListGlobal.filter(modal =>
                String(modal.id).includes(String(searchTerm)) ||
                String(modal.likes).includes(String(searchTerm)) ||
                String(modal.downloads).includes(String(searchTerm))
            )
        )
    }
    const resetSearch = () => {
        searchRef.current.value = "";
        setModalsList(modalsListGlobal)
    }
    const handleSortByDownloads = async () => {
        await loadData("?sort=downloads&direction=-1&limit=50&full=true&config=true")
    }
    const handleRecentlyCreated = async () => {
        console.log(modalsListGlobal[0], "sorted", modalsListGlobal.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified)));
        let list = modalsListGlobal.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
        setModalsList(
            list
        )
        setModalsListGlobal(
            list
        )
    }
    return (
        <Flex
            pl={5}
            mt={10}
            w={"100%"}
            direction={"column"}
            overflowX={"hidden"}
        >
            <FeaturedModels maxW={"100%"} isLoading={loading} featuredData={modalsListGlobal?.reverse().slice(11, 16).sort((a, b) => b.likes - a.likes)} />
            <Flex maxH={"10vh"} justifyContent={"flex-start"} alignItems={"center"} w={"100%"} px={5} gap={20}>
                <Flex gap={4} alignItems={"center"} my={4}>
                    <Heading fontWeight={400} >
                        Models
                    </Heading>
                    <Heading fontWeight={200}>
                        511,687
                    </Heading>
                    <InputGroup >
                        <InputLeftElement pointerEvents='none'>
                            <BiSearch color='gray.300' />
                        </InputLeftElement>
                        <Input onChange={(e) => handleSearchFilter(e.target.value)} ref={searchRef} w={"md"} background={"white"} type='tel' placeholder='Filter by name, downloads, likes ,etc ' />
                    </InputGroup>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"flex-start"}>
                    <Menu>
                        <MenuButton as={Button} variant={"outline"} leftIcon={<IoFilter />} colorScheme={"#F9FAFB"}>
                            Sort by
                        </MenuButton>
                        <MenuList>

                            <MenuItem icon={<IoCodeDownloadSharp />} onClick={handleSortByDownloads} command='⌘N'>
                                Most Downloads
                            </MenuItem>
                            {/* <MenuItem icon={<MdOutlinePublish />} onClick={handleRecentlyCreated} command='⌘O'>
                                Recently created
                            </MenuItem> */}
                        </MenuList>
                    </Menu>
                </Flex>

            </Flex>

            {loading ? <Center >
                <Flex height={"50vh"} mt={10} gap={3} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Spinner />
                    <Text>Waiting for Huggingface API</Text>
                    <Text fontWeight={200} color={"gray"}>
                        Huggingface Public API might have rate limiting. If taking too much time to load, Please refresh.
                    </Text>
                    <Link textDecoration={"underline"} href='https://github.com/SiddheshKukade' isExternal>
                        <Text display={"flex"} direction={"row"} alignItems={"center"} gap={2}>Made with ❤️  By
                            <Avatar src='https://avatars.githubusercontent.com/u/65951872?v=4' />

                            @SiddheshKukade <GoLinkExternal mx='2px' />
                        </Text>
                    </Link>
                </Flex>

            </Center> : (<Flex pl={5} overflow={"scroll"} direction={"column"} gap={3}>
                {
                    modalsList?.length > 0 ?
                        modalsList.map(modal => (

                            <ModalCard
                                modal={modal} />

                        )) : <Center> <Flex direction={"column"} alignItems={"center"} gap={5} justifyContent={"center" } >
                            <Text>
                                No results found !
                            </Text>
                            <Button leftIcon={<BiReset />} variant={"outline"} colorScheme={"#F9FAFB"} onClick={resetSearch}>
                                Reset Search
                            </Button>
                        </Flex></Center>
                }

            </Flex>)}
            {/* modals list */}



        </Flex>
    )
}

export default ModelsView