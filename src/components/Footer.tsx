import { VStack, Text, useBreakpointValue, Box, HStack } from "@chakra-ui/react"
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const [fbHover, setFbHover] = useState(false);
    const [instHover, setInstaHover] = useState(false);
    const date = new Date();

    const fbIconStyle = {
        fontSize: useBreakpointValue({ base: "40px", md: "50px" }),
        cursor: 'pointer',
        borderRadius: '10px',
        color: fbHover ? '#1877F2' : '#176734',
    }

    const instaIconStyle = {
        fontSize: useBreakpointValue({ base: "40px", md: "50px" }),
        cursor: 'pointer',
        borderRadius: '10px',
        color: instHover ? '#d6249f' : '#176734',
    }

    return (
        <VStack justifyContent="center" p={3} bg="#F7FAFC" h="14vh">
            <HStack>
                <Box 
                    as='a' 
                    p='10px' 
                    cursor='pointer' 
                    href="https://www.facebook.com/share/jpVp8s9n6sw2aGfd" 
                    target="_blank"
                    onMouseEnter={() => setFbHover(true)}
                    onMouseLeave={() => setFbHover(false)}>
                    <FaFacebook style={fbIconStyle} />
                </Box>
                <Box 
                    as='a'
                    p='10px' 
                    cursor='pointer' 
                    href="https://www.instagram.com/yenhighjack/?igsh=Yzl0eW1wMGkxN3po&utm_source=qr" 
                    target="_blank"
                    onMouseEnter={() => setInstaHover(true)}
                    onMouseLeave={() => setInstaHover(false)}>
                    <FaInstagram style={instaIconStyle} />
                </Box>
            </HStack>
            <Text color="#176734" mb={3}>&copy; {date.getFullYear()} Jan Hajek | created by Tomas</Text>
        </VStack>
    )
}

export default Footer