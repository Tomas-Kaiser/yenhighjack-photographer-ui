import { Center, VStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import PhotoGrid from "./PhotoGrid"

const LandingPage = () => {
    return (
        <>
            <Center bg='linear-gradient(#F7FAFC 80%, #CBD5E0 100%)' h='100vh'>
                <VStack pb='10px'>
                    {/* <Image src={logo} alt='logo' boxSize='150px' /> */}
                    <VStack spacing={0} style={{ fontFamily: 'Ivar Text' }}>
                        <Text color='#176734' fontSize={{ base: '2.6rem', md: '4.6rem' }} letterSpacing={{ base: '4px', md: '7px' }}>Yen Highjack</Text>
                        <Text color='#176734' fontSize={{ base: '1.2rem', md: '1.6rem' }} letterSpacing={{ base: '1.5px', md: '2px' }}>Photography is a poetry for an eye</Text>
                    </VStack>
                </VStack>
            </Center >
            <PhotoGrid />
        </>
    )
}

export default LandingPage