import { Center, VStack, Text, Button, Heading } from "@chakra-ui/react"
// import logo from "../assets/logo.webp"
import { FaArrowDown } from "react-icons/fa";
import PhotoGrid from "./PhotoGrid"
import AlbumMenu from "./AlbumMenu"
import { topPhotos } from "../assets/photos"

const LandingPage = () => {
    return (
        <>
            <Center bg='linear-gradient(#F7FAFC 80%, #fff 100%)' h='100vh'>
                <VStack pb='10px'>
                    {/* <Image src={logo} alt='logo' boxSize='150px' /> */}
                    <VStack spacing={0} style={{ fontFamily: 'Ivar Text' }}>
                        <Heading as='h1' color='#176734' fontSize={{ base: '2.6rem', md: '4.6rem' }} letterSpacing={{ base: '4px', md: '7px' }}>Yen Highjack</Heading>
                        <Text color='#176734' fontSize={{ base: '1.2rem', md: '1.6rem' }} letterSpacing={{ base: '1.5px', md: '2px' }}>Photography is a poetry for an eye</Text>
                        <Button as='a' href='#topPhotos' color='#176734' borderColor='#176734' size='lg' variant='outline' mt={45} _hover={{ shadow: '1px 1px gray' }} leftIcon={<FaArrowDown />} rightIcon={<FaArrowDown />}>Explore My Art</Button>
                    </VStack>
                </VStack>
            </Center >
            <PhotoGrid
                heading='Show Case of My Art'
                subHeading='Click on a photo to see it in full size'
                photos={topPhotos.photos}
            />
            <AlbumMenu />
        </>
    )
}

export default LandingPage