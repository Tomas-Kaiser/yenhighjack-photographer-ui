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
        background: hover ? 'red' : 'transparent'
    }

    const instaIconSize = useBreakpointValue({ base: "40px", md: "50px" });

    return (
        <VStack justifyContent="center" p={3} bg="green.700" h="14vh">
            <a href="https://www.instagram.com/yenhighjack"><FaInstagram
                color="white"
                size={instaIconSize}
                style={instaIconStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)} />
            </a>
            <Text color="white">&copy; {date.getFullYear()} Tomas Kaiser</Text>
        </VStack>
    )
}

export default Footer