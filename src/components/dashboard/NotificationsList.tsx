import React, { Fragment } from 'react';
import {
    Flex,
    Stack,
    VStack,
    Icon,
    Divider,
    useColorModeValue,
    useDisclosure, Link,
    Text, Popover, PopoverTrigger, HStack, PopoverContent, IconButton
} from '@chakra-ui/react';
import { GoPrimitiveDot } from 'react-icons/go';
import {FiBell} from "react-icons/fi";

interface Notification {
    notification: string;
    dateTime: string;
    userName: string;
    userAvatar: string;
    isOnline: boolean;
}

const notifications: Notification[] = [
    {
        notification: `It's <span style="font-weight: 600">Dan Abrahmov's</span> birthday. Wish him well!`,
        dateTime: '2 days ago',
        userName: 'Dan Abrahmov',
        userAvatar: 'https://bit.ly/dan-abramov',
        isOnline: true
    },
    {
        notification: `<span style="font-weight: 600">Kent Dodds</span> liked your photo.`,
        dateTime: 'yesterday',
        userName: 'Kent Dodds',
        userAvatar: 'https://bit.ly/kent-c-dodds',
        isOnline: true
    },
    {
        notification: `<span style="font-weight: 600">Jena Karlis</span> registered new client as <span style="font-weight: 600">Trilia</span>.`,
        dateTime: '4 days ago',
        userName: 'Jena Karlis',
        userAvatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        isOnline: false
    }
];

const NotificationsList = () => {
    const linkColor = 'cyan.400';
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
                        <IconButton
                            size="lg"
                            variant="ghost"
                            aria-label="open menu"
                            icon={<FiBell />}
                        />
                    </Link>
                </HStack>
            </PopoverTrigger>

            <PopoverContent
                mr={2}
                zIndex={6}
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
                    width={"full"}
                >
                    {notifications.map((notification, index) => (
                        <Fragment key={index}>
                            <Flex
                                w="100%"
                                justify="space-between"
                                alignItems="center"
                                _hover={{ bg: 'gray.200' }}
                            >
                                <Stack spacing={0} direction="row" alignItems="center">
                                    {/*<Flex p={4}>*/}
                                    {/*    <Avatar size="md" name={notification.userName} src={notification.userAvatar} />*/}
                                    {/*</Flex>*/}
                                    <Flex direction="column" px={5} py={2}>
                                        <Text
                                            color={'black'}
                                            fontSize={'normal'}
                                            dangerouslySetInnerHTML={{ __html: notification.notification }}
                                        />
                                        <Text
                                            color={'gray.400'}
                                            fontSize={'sm'}
                                        >
                                            {notification.dateTime}
                                        </Text>
                                    </Flex>
                                </Stack>
                                {notification.isOnline && (
                                    <Flex p={4}>
                                        <Icon as={GoPrimitiveDot} w={5} h={5} color="blue.400" />
                                    </Flex>
                                )}
                            </Flex>
                            {notifications.length - 1 !== index && <Divider m={0} />}
                        </Fragment>
                    ))}
                </VStack>
            </PopoverContent>
        </Popover>
    );
};

export default NotificationsList;