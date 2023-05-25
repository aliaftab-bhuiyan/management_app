import {
    Button,
    Card,
    CardBody,
    Center,
    Flex,
    Grid,
    GridItem,
    Heading, Table, TableCaption,
    TableContainer, Tbody, Td,
    Text, Th, Thead, Tr
} from "@chakra-ui/react";
import React from "react";

export default function DashboardPayments(){
    return(
        <Grid templateAreas={`
            'balance transaction'
            'referral transaction'`}
              gridTemplateRows={'210px 1fr'}
              gridTemplateColumns={'1fr 1fr'}
              gap='2'
         >
            <GridItem area='balance'>
                <Card height='full'>
                    <CardBody>
                        <Heading pb='2%' size='md'>Remaining Balance</Heading>
                        <Flex alignItems={"baseline"} justifyContent={'center'}>
                            <Text fontSize={"xl"} fontWeight={"semibold"} mr={1}>£</Text>
                            <Text fontSize={'5xl'} fontWeight={"extrabold"}>20.89</Text>
                        </Flex>
                        <Center>
                            <Button mt={5} variant={'outline'} _hover={{bg:'green.400', color:'white'}}>Top-up</Button>
                        </Center>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem area='transaction'>
                <Card height='fit-content'>
                    <CardBody>
                        <Heading pb='2%' size='md'>Transactions</Heading>
                        <TableContainer>
                            <Table size='sm' variant='striped' colorScheme='gray'>
                                <TableCaption>Imperial to metric conversion factors</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>txn id</Th>
                                        <Th>date</Th>
                                        <Th>via</Th>
                                        <Th isNumeric>amount</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>XC5TRB</Td>
                                        <Td>18 Feb 2000</Td>
                                        <Td>Paypal</Td>
                                        <Td isNumeric>25.4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>FEK8UN</Td>
                                        <Td>31 Oct 1996</Td>
                                        <Td>Visa</Td>
                                        <Td isNumeric>30.48</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem area='referral'>
                <Card height='full'>
                    <CardBody>
                        <Heading size='md' pb='2%'>Referral Bonus</Heading>
                        <Text>referrals</Text>
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    )
}