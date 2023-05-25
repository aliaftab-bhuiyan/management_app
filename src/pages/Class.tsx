import {
    AspectRatio,
    Box,
    Button,
    Card,
    CardBody,
    Flex, FormControl, Text,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, Textarea,
    Tooltip,
    useDisclosure, Tag, HStack, useColorModeValue
} from "@chakra-ui/react";
import {
    FaCommentAlt,
    FaHandSpock,
    FaHome,
    FaMicrophone, FaMicrophoneSlash, FaPenAlt,
    FaRegCommentAlt,
    FaStickyNote,
    FaVideo, FaVideoSlash
} from "react-icons/fa";
import React, {useState} from "react";
import {BiExit, BiSend} from "react-icons/bi";

export default function Class(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showChat, setShowChat] = useState(false)
    const [mute, setMute] = useState(false)
    const [video, setVideo] = useState(false)
    const [ask, setAsk] = useState(false) // only student
    const [answer, setAnswer] = useState(false) // only teacher + BUG
    const [whiteboard, setWhiteboard] = useState(false) // only teacher + BUG

    return(
        // waiting for teacher/student
        <Grid
            p='1%'
            bg={useColorModeValue('gray.100','gray.900')}
            gridTemplateRows={'1fr 56px 1fr'}
            gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr 450px '}
            gap='2'
            templateAreas={`
        'class class class class book book'
        'control control control control control control'
        'desc desc desc desc desc chat'
        `}>
        <GridItem area='class'>
            <AspectRatio ratio={16 / 9}>
                <iframe
                    title={'video-frame'}
                    onContextMenu={(e) => e.preventDefault()}
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                />
            </AspectRatio>
        </GridItem>
            <GridItem area='book'>
                <iframe
                    title={'pdf-frame'}
                    onContextMenu={(e) => e.preventDefault()}
                    src={'https://www.africau.edu/images/default/sample.pdf'}
                    width="100%"
                    height="100%"/>
            </GridItem>
            <GridItem area='control'>
                <Box bg={useColorModeValue('white','gray.700')} p={2} rounded='md'>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Tooltip hasArrow label='Go to Dashboard' placement='right'>
                            <Button as={Link} href='/dashboard'><FaHome /></Button>
                        </Tooltip>
                        <Box>
                            <Tooltip hasArrow label={mute? 'Unmute Audio' : 'Mute Audio'} placement='bottom'>
                                <Button onClick={()=>setMute(!mute)} mr={2}>{mute ? <FaMicrophoneSlash /> : <FaMicrophone />}</Button>
                            </Tooltip>
                            <Tooltip hasArrow label={video?'Turn off Video':'Turn on Video'} placement='bottom'>
                                <Button onClick={()=>setVideo(!video)} mr={2}>{video ? <FaVideo /> : <FaVideoSlash />}</Button>
                            </Tooltip>
                            <Tooltip hasArrow label='Write a Note' placement='bottom'>
                                <Button onClick={onOpen} mr={2}><FaStickyNote /></Button>
                            </Tooltip>
                            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>📝 Note</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Write down your note"
                                                rows={5}
                                                w="full"
                                                rounded="md"
                                                focusBorderColor="brand.400"
                                                fontSize="normal"
                                            />
                                            <Grid width={"full"} mt={5} templateAreas={`
                                            'new new add'
                                            'tag tag tag'
                                            `}
                                            gridTemplateRows={'1fr 1fr 1fr'}
                                            gridTemplateColumns={'1fr 1fr 62px'}>
                                                <GridItem area={'new'}>
                                                    <Input rounded={'md'} size={'sm'} width={'full'} type={'text'} placeholder={'Category name'} />
                                                </GridItem>
                                                <GridItem textAlign={'right'} area={'add'}>
                                                    <Button size={'sm'} variant={'outline'} colorScheme={'whatsapp'}>New</Button>
                                                </GridItem>
                                                <GridItem mt={3} area={'tag'}>
                                                    <HStack>
                                                        <Tag px={3} py={2} mr={1}>tag1</Tag>
                                                        <Tag px={3} py={2}>tag1</Tag>
                                                    </HStack>
                                                </GridItem>
                                            </Grid>
                                        </FormControl>
                                        <Flex alignItems={"center"} justifyContent={"end"}>
                                            <Button colorScheme='blue' mr={2}>
                                                Save
                                            </Button>
                                            <Button onClick={onClose}>Cancel</Button>
                                        </Flex>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                            <Tooltip hasArrow label={ask? 'Waiting for permission' : 'Ask a Question'} placement='bottom'>
                                <Button
                                    onClick={()=>setAsk(!ask)}
                                    bg={ask? 'yellow.300' : 'gray.200'}
                                    color={ask? 'blue' : 'black'}
                                    _hover={{bg:'yellow.300'}}
                                    mr={2}><FaHandSpock /></Button>
                            </Tooltip>
                            <Tooltip hasArrow label={whiteboard? 'Writing on whiteboard':'Write on whiteboard'} placement='bottom'>
                                <Button
                                    onClick={()=>setWhiteboard(!whiteboard)}
                                    bg={whiteboard? 'yellow.300' : 'gray.200'}
                                    color={whiteboard? 'blue' : 'black'}
                                    _hover={{bg:'yellow.300'}}
                                    mr={2}><FaPenAlt /></Button>
                            </Tooltip>
                            <Tooltip hasArrow label='End the Session - COULD EFFECT SCORE' placement='bottom'>
                                <Button _hover={{bg:'red.400', color:'white'}}><BiExit /></Button>
                            </Tooltip>
                        </Box>
                        <Tooltip hasArrow label={showChat?'Hide Conversation':'Show Conversation'} placement='left'>
                            <Button onClick={()=>setShowChat(!showChat)} bg='transparent'>
                                {showChat ? <FaCommentAlt color={'red'}/> : <FaRegCommentAlt />}
                            </Button>
                        </Tooltip>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem area='desc'>
                <Box>
                    <Box bg={useColorModeValue('white','gray.700')} rounded={"md"} px={4} py={2} mb={2} style={answer ? {display: 'none'}:{display:'block'}}>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Text><strong>STUDENT_NAME</strong> is trying to ask a question</Text>
                            <Box>
                                <Button onClick={()=>setAnswer(!answer)} mr={2} bg={"green.400"} color={'white'}>Approve</Button>
                                <Button bg={'red.400'} color={"white"}>Decline</Button>
                            </Box>
                        </Flex>
                    </Box>
                    <Card>
                        <CardBody>d</CardBody>
                    </Card>
                </Box>
            </GridItem>
            <GridItem area='chat'>
                <Card height={'full'} hidden={!showChat}>
                    <CardBody>
                        <Box>
                            <InputGroup>
                                <Input type='text' placeholder='Write Message' maxLength={200} />
                                <InputRightElement>
                                    <BiSend />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Box></Box>
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    );
}