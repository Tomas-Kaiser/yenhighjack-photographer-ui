import { VStack, Text, useBreakpointValue } from "@chakra-ui/react"
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const [hover, setHover] = useState(false);

    const date = new Date();


    const instaIconStyle = {
        fontSize: '2.6rem',
        cursor: 'pointer',
        borderRadius: '10px',
        background: hover ? '#E53E3E' : 'transparent'
    }

    const instaIconSize = useBreakpointValue({ base: "40px", md: "50px" });

    return (
        <VStack justifyContent="center" p={3} bg="#F7FAFC" h="14vh">
            <a href="https://www.instagram.com/yenhighjack/?igsh=Yzl0eW1wMGkxN3po&utm_source=qr" target="_blank"><FaInstagram
                color="#176734"
                size={instaIconSize}
                style={instaIconStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)} />
            </a>
            <Text color="#176734">&copy; {date.getFullYear()} Tomas Kaiser</Text>
        </VStack>
    )
}

export default Footer