import {
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
    Flex,
    Text,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ContactPage = () => {

    return (
        <>
            <Breadcrumb mt={20} pl={5} spacing='8px' separator={<FaChevronRight size='12px' color='#176734' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/' color='#176734'>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink isCurrentPage={true} color='#176734'>
                        Contact
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex p={{ base: 5, md: 8, lg: 12 }} mt={{ base: 20 }} direction="column" align="center" justify="center">
                <Heading pb={5} color='#176734'>Contact Me</Heading>
                <Text pb={12} color='#176734'>Send me a message by filling out the form below or clicking on the instagram icon</Text>
                <Box as="form" w={{ base: '280px', sm: '400px', md: '500px', lg: '750px' }} name="contact" method="post" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <Box mb="3">
                        <FormLabel color='#176734'>Your Name:</FormLabel>
                        <Input id="name" type="text" name="name" focusBorderColor="green.500" isRequired={true} />
                    </Box>
                    <Box mb="3">
                        <FormLabel color='#176734'>Your Email:</FormLabel>
                        <Input id="email" type="email" name="email" focusBorderColor="green.500" isRequired={true} />
                    </Box>
                    <Box mb="3">
                        <FormLabel color='#176734'>Message:</FormLabel>
                        <Textarea id="message" name="message" focusBorderColor="green.500" isRequired={true} />
                    </Box>
                    <Flex justify="center">
                        <Button type="submit" bg='#176734' _hover={{ bg: '#1e9c4b' }} style={{ width: '100%', color: '#f7fafc' }}>Send</Button>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default ContactPage