import { Box, Center, Divider, Heading, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { photoCoverAlbums } from '../assets/photos'

const hoverImgStyle = {
    cursor: "pointer",
    background: "rgba(0, 0, 0, 0.9)"
}

const outerBoxStyle = {
    columnCount: { base: '0', sm: '2', lg: '3' },
    columnGap: { base: '0', sm: '5px' },
    padding: { base: '0', sm: '0 12px' },
    width: '100%',
    background: '#fff' // linear-gradient(#fff 80%, #F7FAFC 100%)
}

const AlbumMenu = () => {
    return (
        <>
            <Heading id='albums' as='h2' size='xl' textAlign='center' mt={70} mb={5} color='#176734'>Albums</Heading>
            <Text textAlign='center' color='#176734' mb={3}>To see more of my work, check out my albums</Text>
            <Center>
                <Box w='180px' pb={10}>
                    <Divider style={{ borderColor: '#176734' }} />
                </Box>
            </Center>
            <Center>
                <Box sx={outerBoxStyle}>
                    {photoCoverAlbums.map((photo, index) => (
                        <Link to={`/album/${index}`}>
                            <Box
                                key={photo.path}
                                id={photo.path}
                                position='relative'
                                mb={3}
                                _hover={{
                                    "> div": {
                                        opacity: 1,
                                    },
                                    cursor: "pointer",
                                }}
                            >
                                <Image src={photo.path} objectFit='cover' width='100%' height='400px' _hover={hoverImgStyle}></Image>
                                <Box
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    width="100%"
                                    height="100%"
                                    backgroundColor="rgba(0, 0, 0, 0.5)"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    opacity="1"
                                    transition="opacity 1s"
                                >
                                    <Text color="white">- {photo.name} -</Text>
                                </Box>

                            </Box>
                        </Link>
                    ))}
                </Box >
            </Center>
        </>
    )
}

export default AlbumMenu