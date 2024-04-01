import { Image, Box } from "@chakra-ui/react"

const photos = [
    {
        path: '/IMG_5130.webp'
    },
    {
        path: '/IMG_5131.webp'
    },
    {
        path: '/IMG_5132.webp'
    },
    {
        path: '/IMG_5133.webp'
    },
    {
        path: '/IMG_5134.webp'
    },
    // {
    //     path: '/IMG_5135.webp'
    // },
    {
        path: '/IMG_5136.webp'
    },
    {
        path: '/IMG_5137.webp'
    },
    {
        path: '/IMG_5138.webp'
    },
]

const outerBoxStyle = {
    columnCount: { base: '2', lg: '3', xl: 4 },
    columnGap: '1rem',
    width: '100%',
    background: 'grey'
}

const innerBoxStyle = {
    display: 'inline-block',
    width: '100%',
    marginBottom: '1rem',
}

const PhotoGrid = () => {
    return (
        <Box p={3} sx={outerBoxStyle}>
            {photos.map((photo) => (
                <Box id={photo.path} style={innerBoxStyle}>
                    <Image src={photo.path}></Image>
                </Box>
            ))}
        </Box>
    )
}

export default PhotoGrid