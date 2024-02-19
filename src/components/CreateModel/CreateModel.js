import React, { useState } from 'react'
import { Button, Center, Flex, Text, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon, Radio, RadioGroup, Stack, useToast, FormErrorMessage } from '@chakra-ui/react'
import { FiCodesandbox } from "react-icons/fi";
import Navbar from '../Navbar/Navbar'
import { FaBookAtlas } from "react-icons/fa6";
import { GoRepoLocked } from "react-icons/go";
import { IoAdd } from 'react-icons/io5';
import { Select } from 'chakra-react-select';
const CreateModel = () => {
    const toast = useToast();
    const [modelName, setModelName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [selecteLicense, setSelectedLicense] = useState("mit")
    const [isPrivate, setIsPrivate] = useState(false);
    const licenseOptions = ["apache-2.0", "mit", "openrai", "afl-3.0", "artistic-2.0"]

    const [isModalNameValid, seIsModelNameValid] = useState(true);
    const [isOwnerNameValid, setIsOwnerNameValid] = useState(true);
    const handleOwnerNameValidOnBlur = () => {
        let res = ownerName != "";
        setIsOwnerNameValid(res);
    }
    const hadleModelNameValidOnBlur = () => {
        let res = modelName != "";
        seIsModelNameValid(res);
    }
    const handleCreateModel = () => {

        handleOwnerNameValidOnBlur()
        hadleModelNameValidOnBlur()
        if (modelName == "" || ownerName == "") {
            toast({
                title: `Error`,
                description: "Please fill in the required fields.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        } else {
            toast({
                title: `Success`,
                description: "The model has been created successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }

    }

    return (<>
        <Navbar />

        <Flex
            h={"70vh"} w={"100vw"} alignItems={"center"} justifyContent={"flex-start"} direction={"column"}>
            <Flex direction={"column"} gap={5} maxW={"60vw"}>
                <Center pt={10}>
                    <FiCodesandbox size={"75px"} color='#5530bb' /></Center>
                <Center>                <Heading fontWeight={600} >
                    Create a new model repository
                </Heading>
                </Center>
                <Center>                    <Heading fontWeight={300} fontSize={"lg"}>
                    A repository contains all model files, including the revision history.
                </Heading >
                </Center>

                <Flex gap={3} >
                    <FormControl isInvalid={!isOwnerNameValid}>
                        <FormLabel>
                            Owner
                        </FormLabel>
                        <Input onChange={(e) => { setOwnerName(e.target.value) }} isInvalid={!isOwnerNameValid} onBlur={handleOwnerNameValidOnBlur} w={"md"} background={"white"} type='tel' placeholder="Enter the name of owner" />
                        <FormErrorMessage>
                            Please provide owner name
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!isModalNameValid}>
                        <FormLabel>
                            Model Name
                        </FormLabel>
                        <Input isInvalid={!isModalNameValid} errorBorderColor='crimson' onBlur={hadleModelNameValidOnBlur} onChange={(e) => { setModelName(e.target.value) }} w={"md"} background={"white"} type='tel' placeholder="Enter the name of owner" />
                        <FormErrorMessage>
                            Please provide a model name
                        </FormErrorMessage>
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl>
                        <FormLabel>
                            License
                        </FormLabel>
                        <Select
                            defaultValue={{
                                label: selecteLicense,
                                value: selecteLicense,
                            }}
                            onChange={(e) => setSelectedLicense(e.value)}
                            options={licenseOptions.map(license => {
                                return {
                                    label: license,
                                    value: license,
                                }
                            })}
                            placeholder={"Enter the License provider"}
                        />
                    </FormControl>
                </Flex>
                <Flex direction={"column"} gap={6}>
                    <RadioGroup defaultValue={'1'} cursor={"pointer"}>
                        <Stack spacing={4} direction='column'>
                            <Radio value={'1'} onChange={e => setIsPrivate(true)}>
                                <Button onChange={e => setIsPrivate(true)} leftIcon={<FaBookAtlas />} variant={"ghost"}>Public </Button>
                                <Text onChange={e => setIsPrivate(true)} fontWeight={200}>Anyone on the internet can see this model. Only you (personal model) or members of your organization (organization model) can commit.</Text>
                            </Radio>
                            <Radio value={'2'} onChange={e => setIsPrivate(true)}>
                                <Button onChange={e => setIsPrivate(true)} leftIcon={<GoRepoLocked />} variant={"ghost"}>Private </Button>
                                <Text onChange={e => setIsPrivate(true)} fontWeight={200}>Only you (personal model) or members of your organization (organization model) can see and commit to this model.</Text>
                            </Radio>
                        </Stack>
                    </RadioGroup>

                    <Button leftIcon={<IoAdd />} onClick={handleCreateModel}>
                        Create Model
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    </>

    )
}

export default CreateModel