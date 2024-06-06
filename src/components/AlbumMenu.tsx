import { Box, Center, Divider, Heading, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { photoCoverAlbums } from '../assets/photos'
import { useTranslation } from "react-i18next"

const hoverImgStyle = {
    cursor: "pointer",
    background: "rgba(0, 0, 0, 0.9)"
}

const outerBoxStyle = {
    display: { sm: 'flex' },
    justifyContent: { sm: 'center' },
    padding: { sm: '0 12px' },
    width: '100%',
    background: '#fff'
}

const AlbumMenu = () => {
    const { t } = useTranslation();

    return (
        <>
            <Box id='albums'></Box>
            <Heading as='h2' size='xl' textAlign='center' mt={70} mb={5} color='#176734'>{t('albums')}</Heading>
            <Text textAlign='center' color='#176734' mb={3}>{t('albumSubText')}</Text>
            <Center>
                <Box w='180px' pb={10}>
                    <Divider style={{ borderColor: '#176734' }} />
                </Box>
            </Center>
            <Box sx={outerBoxStyle}>
                {photoCoverAlbums.map((photo, index) => (
                    <Box key={photo.path} width={{ sm: '230px', lg: '350px' }} p={{ sm: '10px' }}>
                        <Link
                            to={`/albums/${index}`} >
                            <Box
                                id={photo.path}
                                position='relative'
                                mb={3}
                                _hover={{
                                    "> div": {
                                        opacity: 0.80,
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
                    </Box>
                ))}
            </Box >
        </>
    )
}

export default AlbumMenu