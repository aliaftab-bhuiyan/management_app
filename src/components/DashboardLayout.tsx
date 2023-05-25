import React, {ReactElement, ReactNode} from 'react';
import {Link as RLink, Outlet, useLocation} from 'react-router-dom';
import {
    Box,
    BoxProps,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    FlexProps,
    HStack,
    Icon,
    IconButton,
    Link,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {FiBook, FiClock, FiDollarSign, FiHome, FiMenu, FiSettings, FiTrendingUp,} from 'react-icons/fi';
import {IconType} from 'react-icons';
import ColorModeToggle from "./ColorModeToggle";
import {ChevronRightIcon} from "@chakra-ui/icons";
import NotificationsList from "./dashboard/NotificationsList";
import MenuContainer from "./dashboard/MenuContainer";

interface LinkItemProps {
    name: string;
    icon: IconType;
    href: string;
}

const LinkItems: Array<LinkItemProps> = [
    {name: 'Dashboard', icon: FiHome, href: '/dashboard'},
    {name: 'Courses', icon: FiBook, href: '/dashboard/courses'},
    {name: 'Availability', icon: FiClock, href: '/dashboard/availability'},
    {name: 'Payments', icon: FiDollarSign, href: '/dashboard/payments'},
    {name: 'Activities', icon: FiTrendingUp, href: '/dashboard/activities'},
    {name: 'Settings', icon: FiSettings, href: '/dashboard/settings'},
];

export default function DashboardLayout({children}: {
    children?: ReactNode | undefined;
}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{base: 'none', md: 'block'}}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen}/>
            <Box ml={{base: 0, md: 60}} p="4">
                <Outlet/>
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({onClose, ...rest}: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            {...rest}>
            <RLink to='/'>
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                        Logo
                    </Text>
                    <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
                </Flex>
            </RLink>
            {LinkItems.map((link) => (
                <RLink to={link.href}>
                    <NavItem key={link.name} icon={link.icon}>
                        {link.name}
                    </NavItem>
                </RLink>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactElement | string;
}

const NavItem = ({icon, children, ...rest}: NavItemProps) => {
    return (
        <Link href="#" style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

const BreadcrumbLoop = () => {
    const location = useLocation()
    const pathName: string[] = location.pathname.toUpperCase().split('/')
    return (
        <Breadcrumb
            separator={<ChevronRightIcon color='gray.500'/>}
            fontSize='sm'
            display={{base: 'none', md: 'flex'}}
            ml="0"
            w="full"
            fontWeight="medium"
        >
            {pathName.map((obj, i) => {
                if (obj === '') {
                    return (<BreadcrumbItem>
                        <BreadcrumbLink href='/'><FiHome/></BreadcrumbLink>
                    </BreadcrumbItem>)
                }
                if (obj === pathName.at(-1)) {
                    return (<BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='/dashboard' fontWeight={"bold"}>{pathName.at(i)}</BreadcrumbLink>
                    </BreadcrumbItem>)
                }
                return (<BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">{pathName.at(i)}</BreadcrumbLink>
                </BreadcrumbItem>)
            })}
        </Breadcrumb>
    )
}
const MobileNav = ({onOpen, ...rest}: MobileProps) => {
    return (
        <Flex
            ml={{base: 0, md: 60}}
            px={{base: 4, md: 4}}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{base: 'space-between', md: 'flex-end'}}
            {...rest}>
            <IconButton
                display={{base: 'flex', md: 'none'}}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu/>}
            />

            <Text
                display={{base: 'flex', md: 'none'}}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                Logo
            </Text>
            <BreadcrumbLoop/>
            <HStack spacing={{base: '0', md: '2'}}>
                <ColorModeToggle/>
                <NotificationsList/>
                <MenuContainer />
            </HStack>
        </Flex>
    );
};