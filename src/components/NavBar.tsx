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
                        <Text color='white' style={{
                            letterSpacing: '7px',
                            fontSize: '4.6rem'
                        }}>Yen Highjack</Text>
                        <Text color='white' style={{
                            letterSpacing: '2px',
                            fontSize: '1.6rem'
                        }}>Photography is a poetry for an eye</Text>
                    </VStack>
                </VStack>
            </Center >
        </>
    )
}

export default NavBar