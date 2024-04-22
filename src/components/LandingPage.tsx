import { Center, VStack, Text } from "@chakra-ui/react"
// import logo from "../assets/logo.webp"
import PhotoGrid from "./PhotoGrid"
import AlbumMenu from "./AlbumMenu"
import { topPhotos } from "../assets/photos"

// const photos = [
//     {

//         name: 'name',
//         path: '/IMG_5130.webp'
//     },
//     {
//         name: 'name',
//         path: '/IMG_5131.webp'
//     },
//     {
//         name: 'name',
//         path: '/IMG_5132.webp'
//     },
//     {
//         name: 'name',
//         path: '/IMG_5133.webp'
//     },
//     {
//         name: 'name',
//         path: '/IMG_5134.webp'
//     },
//     {
//         name: 'name',
//         path: '/IMG_5136.webp'
//     },
//     {
//         name: 'name',
//         path: '/IMG_5137.webp'
//     },
//     {
//         name: 'name',
//         path: '/IMG_5138.webp'
//     },
// ]

const LandingPage = () => {
    return (
        <>
            <Center bg='linear-gradient(#F7FAFC 80%, #fff 100%)' h='100vh'>
                <VStack pb='10px'>
                    {/* <Image src={logo} alt='logo' boxSize='150px' /> */}
                    <VStack spacing={0} style={{ fontFamily: 'Ivar Text' }}>
                        <Text color='#176734' fontSize={{ base: '2.6rem', md: '4.6rem' }} letterSpacing={{ base: '4px', md: '7px' }}>Yen Highjack</Text>
                        <Text color='#176734' fontSize={{ base: '1.2rem', md: '1.6rem' }} letterSpacing={{ base: '1.5px', md: '2px' }}>Photography is a poetry for an eye</Text>
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