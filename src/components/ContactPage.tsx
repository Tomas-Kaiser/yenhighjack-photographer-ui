import {
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
    Flex,
    Text,
    Heading
} from '@chakra-ui/react'

const ContactPage = () => {
    return (
        <Flex p='100px' direction="column" align="center" justify="center">
            <Heading pb={5}>Contact Me</Heading>
            <Text pb={12}>Send me a message by filling out the form below or clicking on the instagram icon</Text>
            <form style={{ width: '350px' }} name="contact" method="post" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <Box mb="3">
                    <FormLabel>Your Name:</FormLabel>
                    <Input type="text" name="name" />
                </Box>
                <Box mb="3">
                    <FormLabel>Your Email:</FormLabel>
                    <Input type="email" name="email" />
                </Box>
                <Box mb="3">
                    <FormLabel>Message:</FormLabel>
                    <Textarea name="message" />
                </Box>
                <Flex justify="center">
                    <Button type="submit" style={{ width: '100%' }}>Send</Button>
                </Flex>
            </form>
        </Flex>
    )
}

export default ContactPage