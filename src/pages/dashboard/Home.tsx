import React from 'react';
import DashboardHomeStatistics from "../../components/dashboard/home/Statistics";
import {Button, Card, CardBody, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text} from "@chakra-ui/react";
import {FaVideo} from "react-icons/fa";
import {CloseIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

export default function DashboardHome(){
    const navigate = useNavigate();
    return(
        <div className="Home">
            <DashboardHomeStatistics />
            <Card id='timetable' mt='1%'>
                <CardBody>
                    <Text fontSize={'lg'} fontWeight={"semibold"} textAlign="center" mb={3}>Timetable</Text>
                    <TableContainer>
                        <Table size='md' variant='striped' colorScheme='gray'>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>class</Th>
                                    <Th>instructor</Th>
                                    <Th>time</Th>
                                    <Th isNumeric>charge</Th>
                                    <Th>duration</Th>
                                    <Th isNumeric>actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr _hover={{fontWeight: 'semibold'}}>
                                    <Td>BX06Y</Td>
                                    <Td>Physics</Td>
                                    <Td>Ali Aftab BHUIYAN</Td>
                                    <Td>13th Oct 2023</Td>
                                    <Td isNumeric>£9.81</Td>
                                    <Td>45 minutes</Td>
                                    <Td py={0}>
                                        <Flex gap='3%' alignItems='center' justifyContent='end'>
                                            <Button onClick={(() => navigate("/class/akjdfbaijsdbf"))} colorScheme='whatsapp' variant='solid'>
                                                <FaVideo />
                                            </Button>
                                            <Button colorScheme='red' variant='solid'>
                                                <CloseIcon />
                                            </Button>
                                        </Flex>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>KU3HL</Td>
                                    <Td>History</Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td py={0}>
                                        <Flex gap='3%' alignItems='center' justifyContent='end'>
                                            <Button colorScheme='whatsapp' variant='solid'>
                                                <FaVideo />
                                            </Button>
                                            <Button colorScheme='red' variant='solid'>
                                                <CloseIcon />
                                            </Button>
                                        </Flex>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>PO1RJ</Td>
                                    <Td>Chinese</Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td py={0}>
                                        <Flex gap='3%' alignItems='center' justifyContent='end'>
                                            <Button colorScheme='whatsapp' variant='solid'>
                                                <FaVideo />
                                            </Button>
                                            <Button colorScheme='red' variant='solid'>
                                                <CloseIcon />
                                            </Button>
                                        </Flex>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
            <Card id='time-table' mt='1%'>
                <CardBody>
                    <Text fontSize={'lg'} fontWeight={"semibold"} textAlign="center" mb={3}>Previous Lessons</Text>
                    <TableContainer>
                        <Table size='md' variant='striped' colorScheme='gray'>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>class</Th>
                                    <Th>instructor</Th>
                                    <Th>time</Th>
                                    <Th>cost</Th>
                                    <Th>status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Physics</Td>
                                    <Td>Ali Aftab BHUIYAN</Td>
                                    <Td>13th Oct 2023</Td>
                                    <Td>£8.99</Td>
                                    <Td>Complete</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </div>
    );
}
