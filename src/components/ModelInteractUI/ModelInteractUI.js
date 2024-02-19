import { Flex, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { CiChat1 } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { chatbotResponses } from '../../constants/graphData';

const ModelInteractUI = ({ model }) => {
  const toast = useToast();
  const [prompt, setPrompt] = useState("")
  const [chatList, setChatList] = useState([]);
  const scrollContainerRef = useRef(null);
  const addNewMsg = (msg) => {
    if (prompt?.length <= 0) {

      toast({
        title: `Warning`,
        description: "Please enter something in the prompt",
        status: 'warning',
        duration: 1000,
        isClosable: true,

      })
      return;
    }
    setChatList(prev => [...prev, msg]);
    setPrompt("");
    setTimeout(() => {
      setChatList(prev => [...prev, chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)]]);

    }, 1200)
  }
  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      addNewMsg(prompt);
    }
  };
  useEffect(() => {
    // Access the DOM element using the ref
    const container = scrollContainerRef.current;

    // Scroll to the bottom on each update
    container.scrollTop = container.scrollHeight;
  });
  return (
    <Flex
      maxW="100vw"
      justifyContent={"center"}
      h={"60vh"}
      pl={20}
      overflow={"hidden"}
    >
      <Flex w="60vw"
        gap={4}

        direction={"column"}
        justifyContent={"flex-end"}
        pb={3}
        alignItems={"center"}
        h={"100%"} color={"black"}

      >
        <Flex ref={scrollContainerRef} h={"100%"} direction={"column"} w="30vw" overflowY={"scroll"}>
          {
            chatList.map((chat, idx) =>
              <Flex alignItems={idx % 2 == 1 ? "flex-start" : "flex-end"} direction={"column"} minW={"30%"}>
                <Text>{idx % 2 == 1 ? model.id : "User"}</Text>
                <Flex p={3} borderRadius={10} backgroundColor={idx % 2 == 1 ? "#ede7f6" : "lightgray"}
                  color={idx % 2 == 1 ? "#8037a7" : "black"}>
                  <Text > {chat}</Text>
                </Flex>
              </Flex>
            )
          }
        </Flex>
        <Flex w={"80%"} gap={2}
        >
          <InputGroup maxW={"80%"}
          >
            <InputLeftElement pointerEvents='none'>
              <CiChat1 color='gray.800' fontSize={"30px"} px={3} py={4} />
            </InputLeftElement>
            <Input focusBorderColor='black' onKeyDown={handleKeyDown} borderColor={"black"} fontSize={"md"} py={4} px={3} onSubmit={console.log("sub")} value={prompt} onChange={(e) => { setPrompt(e.target.value) }} type='tel' placeholder="Enter your prompt here" />
          </InputGroup>
          <IconButton variant={"outline"} onClick={(e) => addNewMsg(prompt)} px={3} icon={<FaArrowUpLong />} colorScheme='#6132b6' fontSize={"30px"} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ModelInteractUI