import { Button, Flex, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiReset } from 'react-icons/bi';
import { IoIosSearch } from "react-icons/io";
import TasksUI from './TasksUI/TasksUI';
import SizesUI from './SizesUI/SizesUI';
import LanguagesUI from './LanguagesUI/LanguagesUI';
import LicensesUI from './LicensesUI/LicensesUI';
import OthersUI from './OthersUI/OthersUI';

export const Sidebar = ({ ...rest }) => {
    const [filterText, setFilterText] = useState("")
    return (
        <Flex
            direction={"column"}
            transition={"3s ease"}
            bg={useColorModeValue('white', 'gray.900')}
            w={{ base: 'full', lg: "30vw" }}
            // pos={"fixed"}
            maxH={"100vh"}
            // h={"full"}
            overflowY={"scroll"}
            {...rest}
            mt={{ base: 0, lg: 0 }}
            zIndex={100}

        >
            <Tabs pt={10} variant='soft-rounded' size={"sm"}  >
                <TabList
                >
                    <Tab

                        background={"white"} color={"black"}
                        _selected={
                            {
                                backgroundColor: "black",
                                color: "white"
                            }
                        }
                    >Tasks</Tab>
                    <Tab
                        background={"white"} color={"black"}
                        _selected={
                            {
                                backgroundColor: "black",
                                color: "white"
                            }
                        }>Sizes</Tab>
                    <Tab
                        background={"white"} color={"black"}
                        _selected={
                            {
                                backgroundColor: "black",
                                color: "white"
                            }
                        }>Languages</Tab>
                    <Tab
                        background={"white"} color={"black"}
                        _selected={
                            {
                                backgroundColor: "black",
                                color: "white"
                            }
                        }>Licenses</Tab>
                    <Tab
                        background={"white"} color={"black"}
                        _selected={
                            {
                                backgroundColor: "black",
                                color: "white"
                            }
                        }>Others</Tab>
                </TabList>
                <Flex direction={"row"} gap={4} pt={5} px={4} justifyContent={"space-between"}>
                    <InputGroup size={"sm"} maxW={"60%"}>
                        <InputLeftElement pointerEvents='none'>
                            <IoIosSearch color='gray.300' />
                        </InputLeftElement>
                        <Input  value={filterText} onChange={(e) => setFilterText(e.target.value)} type='tel' placeholder='Filter tasks by name ' />
                    </InputGroup>
                    <Button
                        border={"1px solid gray"}
                        px={4}
                        borderRadius={10}
                        size={"sm"}
                        leftIcon={<BiReset />} color={"darkslategray"} onClick={() => setFilterText("")} variant={"ghost"}> Reset Tasks</Button>
                </Flex>
                <TabPanels>
                    <TabPanel minH={"100vh"}>
                        <TasksUI />
                    </TabPanel>
                    <TabPanel minH={"100vh"} >
                        <SizesUI />
                    </TabPanel>
                    <TabPanel minH={"100vh"} >
                        <LanguagesUI />
                    </TabPanel>
                    <TabPanel minH={"100vh"}>
                        <LicensesUI />
                    </TabPanel>
                    <TabPanel minH={"100vh"}>
                        <OthersUI />
                    </TabPanel>
                </TabPanels>
            </Tabs>



        </Flex>
    )
}
