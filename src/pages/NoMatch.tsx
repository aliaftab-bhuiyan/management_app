import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function NoMatch() {
    return (
        <Box textAlign="center" py={16} px={8}>
            <Heading
                display="inline-block"
                as="h1"
                size="4xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist
            </Text>

            <Button
                as={'a'}
                mt={4}
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="white"
                href={'/'}
                variant="solid">
                Go to Home
            </Button>
        </Box>
    );
}