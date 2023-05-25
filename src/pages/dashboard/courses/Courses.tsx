import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    SimpleGrid,
    Text,
    Image,
    Progress,
    Flex
} from "@chakra-ui/react";
import {BiRightArrowAlt} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

export default function DashboardCourses() {
    const navigate = useNavigate();
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(350px, 1fr))'>
            <Card>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Text fontSize='lg' fontWeight={"semibold"} mt={5}> Course One</Text>
                    <Text display='flex' alignItems='center'>Lecturer <BiRightArrowAlt /> <Text ml="2%" fontWeight='semibold' color='gray.600'>ALI AFTAB BHUIYAN</Text></Text>
                    <Flex alignItems="center" gap={2}>
                        <Text>Completed</Text>
                        <BiRightArrowAlt size={24} />
                        <Progress hasStripe value={56} width="full" size='md' colorScheme='green' />
                    </Flex>
                </CardBody>
                <CardFooter>
                    <Button onClick={(()=> navigate('/dashboard/course/course-one'))}>Show Details</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Course Two</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>Show Details</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Course Three</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>Show Details</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    );
}