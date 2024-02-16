import { Image, Text, VStack } from "@chakra-ui/react"

import logo from "../assets/logo.webp"

const NavBar = () => {
    return (
        <>
            <Text color='white' align='right'>Toggle</Text>
            <VStack pb='10px'>
                <Image src={logo} alt='logo' boxSize='60px' />
                <VStack spacing={0}>
                    <Text color='white'>Yen Highjack</Text>
                    <Text color='white'>Photography is a poetry for an eye</Text>
                </VStack>
            </VStack>
        </>
    )
}

export default NavBar