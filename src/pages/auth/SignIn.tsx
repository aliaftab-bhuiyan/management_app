import {
    Link as SLink,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import React from "react";
import {Link, useNavigate} from "react-router-dom"

export default function SignIn() {
    const navigate = useNavigate()
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        or go back to <Link to="/" style={{color: 'blue', fontWeight: 'bold'}}>home</Link> page ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link to="/" style={{color: 'blue'}}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                onClick={()=>{
                                    navigate("/dashboard")
                                }}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign In
                            </Button>
                            <Button
                                as={SLink}
                                href='/sign-up'
                                style={{textDecoration: "none"}}
                                bg={'green.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'green.500',
                                }}>
                                Create New Account
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}