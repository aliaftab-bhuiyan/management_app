import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
        <Stat
            bg={useColorModeValue('white', 'gray.800')}
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.100', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function DashboardHomeStatistics() {
    return (
        <Box maxW="7xl" mb={5} mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'Universal Points'}
                    stat={'58'}
                    icon={<BsPerson size={'3em'} />}
                />
                <StatsCard
                    title={'Enrolled Courses'}
                    stat={'2'}
                    icon={<FiServer size={'3em'} />}
                />
                <StatsCard
                    title={'Participance'}
                    stat={'78%'}
                    icon={<GoLocation size={'3em'} />}
                />
            </SimpleGrid>
        </Box>
    );
}