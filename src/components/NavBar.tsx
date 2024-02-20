import { Center, Image, Text, VStack } from "@chakra-ui/react"

import logo from "../assets/logo.webp"

const NavBar = () => {
    return (
        <>
            <Text color='white' align='right' h='2vh'>Toggle</Text>
            <Center h='98vh'>
                <VStack pb='10px'>
                    <Image src={logo} alt='logo' boxSize='150px' />
                    <VStack spacing={0} style={{ fontFamily: 'Ivar Text' }}>
                        <Text color='white' fontSize={{ base: '2.6rem', md: '4.6rem' }} letterSpacing={{ base: '4px', md: '7px' }}>Yen Highjack</Text>
                        <Text color='white' fontSize={{ base: '1.2rem', md: '1.6rem' }} letterSpacing={{ base: '1.5px', md: '2px' }}>Photography is a poetry for an eye</Text>
                    </VStack>
                </VStack>
            </Center >
        </>
    )
}

export default NavBar