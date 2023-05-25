import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement, useColorModeValue, Stack, Text,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';

const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="bold" mb="5%">
                Account Details
            </Heading>
            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                        First name
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                        Last name
                    </FormLabel>
                    <Input id="last-name" placeholder="First name" />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl mt="2%">
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        Email address
                    </FormLabel>
                    <Input id="email" type="email" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
            </Flex>
            <Flex>
                <FormControl>
                    <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                        Password
                    </FormLabel>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={show ? 'text' : 'password'}
                            placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </Flex>
        </>
    );
};

const Form2 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="bold" mb="5%">
                User Details
            </Heading>
            <Flex>
                <FormControl>
                    <FormLabel
                        htmlFor="country"
                        fontWeight="normal"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Country / Region
                    </FormLabel>
                    <Select
                        id="country"
                        name="country"
                        autoComplete="country"
                        placeholder="Select option"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        w="full"
                        rounded="md">
                        <option>United Kingdom</option>
                        <option>United States</option>
                    </Select>
                </FormControl>
            </Flex>
            <Flex>
                <FormControl>
                    <FormLabel
                        htmlFor="street_address"
                        fontWeight="normal"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                        mt="2%">
                        Street address
                    </FormLabel>
                    <Input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        w="full"
                        rounded="md"
                    />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl>
                    <FormLabel
                        htmlFor="city"
                        fontWeight="normal"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                        mt="2%">
                        City
                    </FormLabel>
                    <Input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        w="full"
                        rounded="md"
                    />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl mr="2%">
                    <FormLabel
                        htmlFor="state"
                        fontWeight="normal"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                        mt="2%">
                        State / Province
                    </FormLabel>
                    <Input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="state"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        w="full"
                        rounded="md"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel
                        htmlFor="postal_code"
                        fontWeight="normal"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}
                        mt="2%">
                        ZIP / Postal
                    </FormLabel>
                    <Input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        w="full"
                        rounded="md"
                    />
                </FormControl>
            </Flex>
        </>
    );
};

const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="bold" mb="5%">
                Social Handles
            </Heading>
            <Flex>
                <FormControl>
                    <FormLabel
                        fontWeight="normal"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Website
                    </FormLabel>
                    <InputGroup size="md">
                        <InputLeftAddon
                            bg="gray.50"
                            _dark={{
                                bg: 'gray.800',
                            }}
                            color="gray.500"
                            rounded="md">
                            https://
                        </InputLeftAddon>
                        <Input
                            type="tel"
                            placeholder="www.example.com"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            rounded="md"
                        />
                    </InputGroup>
                </FormControl>
            </Flex>

            <Flex>
                <FormControl id="email" mt={1}>
                    <FormLabel
                        fontWeight="normal"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        About
                    </FormLabel>
                    <Textarea
                        placeholder="Write something about yourself"
                        rows={3}
                        shadow="sm"
                        w="full"
                        rounded="md"
                        focusBorderColor="brand.400"
                        fontSize="normal"
                    />
                    <FormHelperText>
                        Brief description for your profile. URLs are hyperlinked.
                    </FormHelperText>
                </FormControl>
            </Flex>
        </>
    );
};

export default function SignUp() {
    const toast = useToast();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Create a new account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        or go back to <Link to="/sign-in" style={{color: 'blue', fontWeight: 'bold'}}>sign in</Link> page ✌️
                    </Text>
                </Stack>
                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    minWidth={{
                        sm: 'full',
                        md: '524'
                    }}
                    p={6}
                    m="10px auto"
                    as="form">
                    <Progress
                        hasStripe
                        value={progress}
                        mb="5%"
                        mx="5%"
                        isAnimated></Progress>
                    {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                    <ButtonGroup mt="5%" w="100%">
                        <Flex w="100%" justifyContent="space-between">
                            <Flex>
                                <Button
                                    onClick={() => {
                                        setStep(step - 1);
                                        setProgress(progress - 33.33);
                                    }}
                                    isDisabled={step === 1}
                                    colorScheme="teal"
                                    variant="solid"
                                    w="7rem"
                                    mr="5%">
                                    Back
                                </Button>
                                <Button
                                    w="7rem"
                                    isDisabled={step === 3}
                                    onClick={() => {
                                        setStep(step + 1);
                                        if (step === 3) {
                                            setProgress(100);
                                        } else {
                                            setProgress(progress + 33.33);
                                        }
                                    }}
                                    colorScheme="teal"
                                    mr="5%"
                                    variant="outline">
                                    Next
                                </Button>
                            </Flex>
                            {step === 3 ? (
                                <Button
                                    w="7rem"
                                    colorScheme="red"
                                    variant="solid"
                                    onClick={() => {
                                        toast({
                                            position: 'bottom-right',
                                            title: 'Account has been created',
                                            description: "We've sent you a verification code to example@mail.com",
                                            status: 'success',
                                            duration: 7500,
                                            isClosable: true,
                                        });
                                        navigate('/sign-in')
                                    }}>
                                    Submit
                                </Button>
                            ) : null}
                        </Flex>
                    </ButtonGroup>
                </Box>
            </Stack>
        </Flex>
    );
}