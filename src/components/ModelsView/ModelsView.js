import { Button, Center, Flex, Heading, IconButton, Input, Text, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spinner, useColorModeValue, useToast, Avatar, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { IoCodeDownloadSharp } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import axios from 'axios';
import ModalCard from '../ModalCard/ModalCard';
import { Link } from 'react-router-dom';
import { GoLinkExternal } from 'react-icons/go';
import FeaturedModels from '../FeaturedModels/FeaturedModels';
import { BiReset, BiSearch } from 'react-icons/bi';
//This component loads the list of modals
const ModelsView = () => {
    const [loading, setLoading] = useState(false);
    const [modalsListGlobal, setModalsListGlobal] = useState([])
    const [modalsList, setModalsList] = useState([]);
    const [modalNumber, setModalNumberLimit] = useState(10);
    const searchRef = useRef(null);

    const toast = useToast()
    //this functions loads the modal data from the HuggingFace API 
    const loadData = async (payload) => {
        setLoading(true)
        try {
            let fetchModalData = await axios.get(`https://huggingface.co/api/models${payload}`)
            //removing the first 20 unreadable model names
            setModalsList(fetchModalData.data.slice(20, 90))
            setModalsListGlobal(fetchModalData?.data.slice(30, 90));
        } catch (e) {
            toast({
                title: `Problem with the API. Please try again later`,
                status: 'erorr',
                duration: 3000,
                isClosable: true,
            })
        }
        setLoading(false)

    }
    //this is the search function
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
    // this functions loads the original list back to reset the search 
    const resetSearch = () => {
        searchRef.current.value = "";
        setModalsList(modalsListGlobal)
    }
    // this function loads the data and ads payload to api to load it via downloads
    const handleSortByDownloads = async () => {
        await loadData("?sort=downloads&direction=-1&limit=50&full=true&config=true")
    }
    //loading the data on the first render
    useEffect(() => {
        loadData("?limit=100&full=true&config=true");
    }, [])

    return (
        <Flex
            pl={5}
            mt={10}
            w={"100%"}
            direction={"column"}
            overflowX={"hidden"}
        >
            <FeaturedModels maxW={"100%"} isLoading={loading} featuredData={modalsListGlobal?.reverse().slice(3, 10).sort((a, b) => b.likes - a.likes)} />
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
                        <Input onChange={(e) => handleSearchFilter(e.target.value)} ref={searchRef} w={"sm"} background={"white"} type='tel' placeholder='Filter by name, downloads, likes ,etc ' />
                    </InputGroup>
                    <Menu>
                        <MenuButton w={"100%"} as={Button} size={"sm"} variant={"outline"} px={3} leftIcon={<IoFilter />} colorScheme={"#F9FAFB"}>
                            Sort
                        </MenuButton>
                        <MenuList>

                            <MenuItem icon={<IoCodeDownloadSharp />} onClick={handleSortByDownloads} command='⌘N'>
                                Most Downloads
                            </MenuItem>

                        </MenuList>
                    </Menu>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"flex-start"}>

                </Flex>

            </Flex>

            {loading ? <Center >
                <Flex height={"50vh"} mt={10} gap={3} direction={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Spinner />
                    <Text>Waiting for Huggingface API</Text>
                    <Text fontWeight={400} color={"gray"}>
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
                        )) : <Center> <Flex direction={"column"} alignItems={"center"} gap={5} justifyContent={"center"} >
                            <Text>
                                No results found !
                            </Text>
                            <Button leftIcon={<BiReset />} variant={"outline"} colorScheme={"#F9FAFB"} onClick={resetSearch}>
                                Reset Search
                            </Button>
                        </Flex></Center>
                }

            </Flex>)}
        </Flex>
    )
}

export default ModelsView