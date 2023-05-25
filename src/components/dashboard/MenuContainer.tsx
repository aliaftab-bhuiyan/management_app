import React, {useState} from 'react';
import {
    Link,
    Avatar,
    VStack,
    Text,
    useColorModeValue,
    useDisclosure, Popover, HStack, PopoverTrigger, PopoverContent, Divider, Box
} from '@chakra-ui/react';

export default function MenuContainer() {
    const linkColor = 'cyan.400';
    const [swapProfile, setSwapProfile] = useState(false)
    const { onOpen, onClose } = useDisclosure();
    return (
        <Popover trigger="hover" placement="bottom" onOpen={onOpen} onClose={onClose}>
            <PopoverTrigger>
                <HStack alignItems="center" cursor="pointer" role="group">
                    <Link
                        href="#"
                        fontWeight="bold"
                        color={useColorModeValue('gray.600', 'gray.200')}
                        _groupHover={{
                            color: linkColor
                        }}
                    >
                        <Avatar size={'sm'} src={"https://i.pravatar.cc/300"}/>
                    </Link>
                </HStack>
            </PopoverTrigger>

            <PopoverContent
                m={2}
                zIndex={5}
                border="2px solid"
                borderColor={useColorModeValue('gray.700', 'gray.100')}
                boxShadow="4px 4px 0"
                bg={useColorModeValue('white', 'gray.800')}
                rounded="lg"
                minW="xs"
            >
                    <VStack
                        boxShadow={useColorModeValue(
                            '2px 6px 8px rgba(160, 174, 192, 0.6)',
                            '2px 6px 8px rgba(9, 17, 28, 0.9)'
                        )}
                        bg={useColorModeValue('white', 'gray.800')}
                        rounded="md"
                        overflow="hidden"
                        spacing={0}
                    >
                        <Box width={"full"}>
                            <Link href="#"
                                  onMouseEnter={()=>setSwapProfile(!swapProfile)}
                                  onMouseLeave={()=>setSwapProfile(!swapProfile)}
                                  _hover={{textDecoration: 'none'}}
                                  textAlign={"center"}>
                                <Box py={2}>
                                    {swapProfile ?
                                        <VStack justify="start" alignItems="left">
                                            <Text fontWeight="extrabold">Muhammad Ahmad</Text>
                                            <Text size="sm" fontWeight={"semibold"} color="gray.500" mt="0 !important">
                                                @m_ahmad
                                            </Text>
                                        </VStack> :
                                        <VStack justify="start" alignItems="left">
                                            <Text fontWeight="semibold">Muhammad Ahmad</Text>
                                            <Text size="sm" color="gray.500" mt="0 !important">
                                                @m_ahmad
                                            </Text>
                                        </VStack>
                                        }
                                </Box>
                            </Link>
                            <Divider />
                            <Box _hover={{bg: 'gray.200'}} py={2} px={4}>
                                <Text fontWeight="500">Option One</Text>
                            </Box>
                            <Box _hover={{bg: 'gray.200'}} py={2} px={4}>
                                <Text fontWeight="500">Option Two</Text>
                            </Box>
                            <Divider />
                            <Box _hover={{bg: 'gray.200'}} py={2} px={4}>
                                <Text fontWeight="500">Sign Out</Text>
                            </Box>
                        </Box>
                    </VStack>
            </PopoverContent>
        </Popover>
    );
};
