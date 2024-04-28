import { Center, VStack, Text, Button } from "@chakra-ui/react"
// import logo from "../assets/logo.webp"
import { FaArrowRight } from "react-icons/fa";
import PhotoGrid from "./PhotoGrid"
import AlbumMenu from "./AlbumMenu"
import { topPhotos } from "../assets/photos"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <>
            <Center bg='linear-gradient(#F7FAFC 80%, #fff 100%)' h='100vh'>
                <VStack pb='10px'>
                    {/* <Image src={logo} alt='logo' boxSize='150px' /> */}
                    <VStack spacing={0} style={{ fontFamily: 'Ivar Text' }}>
                        <Text color='#176734' fontSize={{ base: '2.6rem', md: '4.6rem' }} letterSpacing={{ base: '4px', md: '7px' }}>Yen Highjack</Text>
                        <Text color='#176734' fontSize={{ base: '1.2rem', md: '1.6rem' }} letterSpacing={{ base: '1.5px', md: '2px' }}>Photography is a poetry for an eye</Text>
                        <Button as={Link} to="/contact" color='#176734' borderColor='#176734' size='lg' variant='outline' mt={45} _hover={{ shadow: '1px 1px gray' }} rightIcon={<FaArrowRight />}>Order Me</Button>
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